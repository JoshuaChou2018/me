# macos cmake-gui


之前使用命令行安装：

```
brew install cmake
```

安装的是最新版，安装速度也很快，但是这个cmake是不带 GUI的，用着不习惯，就又一个命令行给卸载了。

```
brew uninstall cmake
```

然后手动安装cmake，去官网下载。

网址：https://cmake.org/download/

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/730180-20200529135817483-1173478203-20221230133628532.1V6hYj.png)

 

 下载框线这个，可能因为时间段问题，晚上下载只有几kb/s，然后就放弃了，早上下载几MB/s。

下载完成后直接双击安装。双击会出现这个界面，直接将cmake图标拖到右边Application文件夹中，这样就可以在launcher中找到cmake了。

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/730180-20200529140038097-1063038490-20221230133638235.qaNBcu.png)

 

 这个样可以从laucher中找到cmake并使用，但是命令行还是查不到cmake,也不能使用cmake。

安装完成之后，使用以下指令创建/usr/local/bin下 CMake 的软链接。

```
sudo "/Applications/CMake.app/Contents/bin/cmake-gui" --install
```

 查看版本：

```
cmake --version
```

 

Ref: https://www.cnblogs.com/juluwangshier/p/12987258.html

