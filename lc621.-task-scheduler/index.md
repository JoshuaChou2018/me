# lc621. Task Scheduler


Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer `n` that represents the cooldown period between two **same tasks** (the same letter in the array), that is that there must be at least `n` units of time between any two same tasks.

Return *the least number of units of times that the CPU will take to finish all the given tasks*.

 

**Example 1:**

```
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: 
A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.
```

**Example 2:**

```
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of size 6 would work since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
```

**Example 3:**

```
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: 
One possible solution is
A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
```

 

**Constraints:**

- `1 <= task.length <= 104`
- `tasks[i]` is upper-case English letter.
- The integer `n` is in the range `[0, 100]`.

##### 解题思路

第一思路是先根据数目最多的task来排位置，确保每两个之间隔的距离是n。这个时候留出来的idel之间也有符合距离为n的位点，然后再考虑其它task的位置。

建立大小为 n+1 的桶子，个数为任务数量最多的那个任务，比如下图，等待时间 n=2，A 任务个数 6 个，我们建立 6 桶子，每个容量为 3：

我们可以把一个桶子看作一轮任务

![image-20220216123149493](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220216123149493.45YABq.png)

先从最简单的情况看起，现在就算没有其他任务，我们完成任务 A 所需的时间应该是 (6-1)*3+1=16，因为最后一个桶子，不存在等待时间。

![image-20220216123159198](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220216123159198.kbRkJu.png)

接下来我们添加些其他任务

![image-20220216123208853](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220216123208853.9y1kKT.png)


可以看到 C 其实并没有对总体时间产生影响，因为它被安排在了其他任务的冷却期间；而 B 和 A 数量相同，这会导致最后一个桶子中，我们需要多执行一次 B 任务，现在我们需要的时间是 (6-1)*3+2=17

前面两种情况，总结起来：总排队时间 = (桶个数 - 1) * (n + 1) + 最后一桶的任务数

当冷却时间短，任务种类很多时

![image-20220216123230603](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220216123230603.jPipji.png)


比如上图，我们刚好排满了任务，此时所需时间还是 17，如果现在我还要执行两次任务 F，该怎么安排呢？

![image-20220216123240898](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220216123240898.eTAOQY.png)

此时我们可以临时扩充某些桶子的大小，插进任务 F，对比一下插入前后的任务执行情况：

插入前：ABC | ABC | ABD | ABD | ABD | AB

插入后：ABCF | ABCF | ABD | ABD | ABD | AB

我们在第一个、第二个桶子里插入了任务F，不难发现无论再继续插入多少任务，我们都可以类似处理，而且新插入元素肯定满足冷却要求

继续思考一下，这种情况下其实每个任务之间都不存在空余时间，冷却时间已经被完全填满了。

也就是说，我们执行任务所需的时间，就是任务的数量

这样剩下就很好处理了，我们只需要算两个数：

记录最大任务数量 N，看一下任务数量并列最多的任务有多少个，即最后一个桶子的任务数 X，

计算 NUM1=(N-1)*(n+1)+x

NUM2=tasks.size()

输出其中较大值即可因为存在空闲时间时肯定是 NUM1 大，不存在空闲时间时肯定是 NUM2>=NUM1



引用解析作者：popopop

引用解析链接：https://leetcode-cn.com/problems/task-scheduler/solution/tong-zi-by-popopop/

##### Answer


```python
from collections import Counter
class Solution(object):
    def leastInterval(self, tasks, n):
        """
        :type tasks: List[str]
        :type n: int
        :rtype: int
        """
        F=Counter(tasks).values()
        max_F=max(F)
        count_max_F=0
        for x in F:
            if x==max_F:
                count_max_F+=1
        ans1=(max_F-1)*(n+1)+count_max_F
        ans2=len(tasks)
        return max(ans1,ans2)

```


