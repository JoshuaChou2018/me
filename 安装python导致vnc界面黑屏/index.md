# 安装Python导致VNC黑屏解决方案


问题在于VNCServer使用Python编写，所以受到系统Python版本影响。

解决方案：

```bash
$ cd $HOME
$ vim .bashrc
找到如下语句：
   export PATH="/home/user/anaconda2/bin:$PATH"
并修改为，并保存退出。
   export PATH="$PATH:/home/user/anaconda2/bin"
$ vncserver -kill :id
$ source .bashrc
$ conda config --set auto_activate_base false #取消conda自动启动base
```


