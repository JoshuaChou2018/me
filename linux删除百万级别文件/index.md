# linux删除百万级别文件


在运行任务时，往linux的同一个文件夹中写入超过500万个文件，导致在硬盘还有空间的情况下，在该文件夹下无法继续写入文件，也无法使用ls、rm等命令。记录处理过程。

*Background: physical server, about two years old, 7200-RPM SATA drives connected to a 3Ware RAID card, ext3 FS mounted noatime and data=ordered, not under crazy load, kernel 2.6.18-92.1.22.el5, uptime 545 days. Directory doesn't contain any subdirectories, just millions of small (~100 byte) files, with some larger (a few KB) ones.*

We have a server that has gone a bit cuckoo over the course of the last few months, but we only noticed it the other day when it started being unable to write to a directory due to it containing too many files. Specifically, it started throwing this error in /var/log/messages:

```
ext3_dx_add_entry: Directory index full!
```

The disk in question has plenty of inodes remaining:

```
Filesystem            Inodes   IUsed   IFree IUse% Mounted on
/dev/sda3            60719104 3465660 57253444    6% /
```

So I'm guessing that means we hit the limit of how many entries can be in the directory file itself. No idea how many files that would be, but it can't be more, as you can see, than three million or so. Not that that's good, mind you! But that's part one of my question: exactly what is that upper limit? Is it tunable? Before I get yelled at—I want to tune it **down**; this enormous directory caused all sorts of issues.

Anyway, we tracked down the issue in the code that was generating all of those files, and we've corrected it. Now I'm stuck with deleting the directory.

A few options here:

1. `rm -rf (dir)`
   
   I tried this first. I gave up and killed it after it had run for a day and a half without any discernible impact.

2. unlink(2) on the directory: Definitely worth consideration, but the question is whether it'd be faster to delete the files inside the directory via fsck than to delete via unlink(2). That is, one way or another, I've got to mark those inodes as unused. This assumes, of course, that I can tell fsck not to drop entries to the files in /lost+found; otherwise, I've just moved my problem. In addition to all the other concerns, after reading about this a bit more, it turns out I'd probably have to call some internal FS functions, as none of the unlink(2) variants I can find would allow me to just blithely delete a directory with entries in it. Pooh.

3. `while [ true ]; do ls -Uf | head -n 10000 | xargs rm -f 2>/dev/null; done )`
   
   This is actually the shortened version; the real one I'm running, which just adds some progress-reporting and a clean stop when we run out of files to delete, is:
   
   export i=0;
   time ( while [ true ]; do
    ls -Uf | head -n 3 | grep -qF '.png' || break;
    ls -Uf | head -n 10000 | xargs rm -f 2>/dev/null;
    export i=$(($i+10000));
    echo "$i...";
   done )
   
   This seems to be working rather well. As I write this, it has deleted 260,000 files in the past thirty minutes or so.

Now, for the questions:

1. As mentioned above, is the per-directory entry limit tunable?
2. Why did it take "real 7m9.561s / user 0m0.001s / sys 0m0.001s" to delete a single file which was the first one in the list returned by `ls -U`, and it took perhaps ten minutes to delete the first 10,000 entries with the command in #3, but now it's hauling along quite happily? For that matter, it deleted 260,000 in about thirty minutes, but it's now taken another fifteen minutes to delete 60,000 more. Why the huge swings in speed?
3. Is there a better way to do this sort of thing? Not store millions of files in a directory; I know that's silly, and it wouldn't have happened on my watch. Googling the problem and looking through SF and SO offers a lot of variations on `find` that are not going to be significantly faster than my approach for several self-evident reasons. But does the delete-via-fsck idea have any legs? Or something else entirely? I'm eager to hear out-of-the-box (or inside-the-not-well-known-box) thinking.

Thanks for reading the small novel; feel free to ask questions and I'll be sure to respond. I'll also update the question with the final number of files and how long the delete script ran once I have that.

Final script output!:

```
2970000...
2980000...
2990000...
3000000...
3010000...

real    253m59.331s
user    0m6.061s
sys     5m4.019s
```

So, three million files deleted in a bit over four hours.

Source: [kernel - rm on a directory with millions of files - Server Fault](https://serverfault.com/questions/183821/rm-on-a-directory-with-millions-of-files)

最终解决方案：

```
export i=0; while [ true ]; do ls -1 -f --ignore '.' --ignore '..'| head -n 1000 | xargs rm -f ; export i=$(($i+1000)); echo “$i…”; done
```

```
rsync -a --delete empty_dir/ pdb_files_split
```

Linux 下删除大量文件效率对比

首先建立50万个文件

```javascript
$ test   for i in $(seq 1 500000);do echo text >>$i.txt;done
```

**rm删除**

```javascript
$ time rm -f *
zsh: sure you want to delete all the files in /home/hungerr/test [yn]? y
zsh: argument list too long: rm
rm -f *  3.63s user 0.29s system 98% cpu 3.985 total
由于文件数量过多，rm不起作用。
```

**find删除**

```javascript
$ time find ./ -type f -exec rm {} \;
find ./ -type f -exec rm {} \;  49.86s user 1032.13s system 41% cpu 43:19.17 total
大概43分钟,我的电脑。。。。。。边看视频边删的。
```

复制

**find with delete**

```javascript
$ time find ./ -type f -delete
find ./ -type f -delete  0.43s user 11.21s system 2% cpu 9:13.38 total
用时9分钟。
```

**rsync删除**

```javascript
# 首先建立空文件夹blanktest
$ time rsync -a --delete blanktest/ test/
rsync -a --delete blanktest/ test/  0.59s user 7.86s system 51% cpu 16.418 total
16s，很好很强大。
```

**Python删除**

```javascript
import os
import timeit
def main():
    for pathname,dirnames,filenames in os.walk('/home/username/test'):
        for filename in filenames:
            file=os.path.join(pathname,filename)
            os.remove(file)

if __name__=='__main__':
t=timeit.Timer('main()','from __main__ import main')
print t.timeit(1)　　
1
2
$ python test.py
529.309022903
大概用时9分钟。
```

**Perl删除**

```javascript
$ time perl -e 'for(<*>){((stat)[9]<(unlink))}'
perl -e 'for(<*>){((stat)[9]<(unlink))}'  1.28s user 7.23s system 50% cpu 16.784 total
16s，这个应该最快了。
```

**结果：**

```javascript
rm：文件数量太多，不可用
find with -exec 50万文件耗时43分钟
find with -delete 9分钟
Perl  16s
Python 9分钟
rsync with -delete  16s
```

ref: https://cloud.tencent.com/developer/article/1647290

