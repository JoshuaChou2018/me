# ubuntu 18.04 升级至 glibc_2.28


近期在ubuntu 18.04上开发PyQt6前段时发现问题：

ubuntu 18.04.6 默认的 glibc 版本位 2.27, 在运行最新的 Qt Creator 6.0.2 时会报错

```awk
$ /opt/Qt/Tools/QtCreator/bin/qtcreator
```

报错

```bash
/opt/Qt/Tools/QtCreator/bin/qtcreator: /lib/x86_64-linux-gnu/libc.so.6: version `glibc_2.28' not found
```

此时最佳方法是升级到 ubuntu 20.04 或 ubuntu 22.04, 还有一种"比较省心"的方法, 保留系统仅升级 glibc



下载 https://ftp.gnu.org/gnu/glibc/glibc-2.28.tar.xz

准备编译环境

```mipsasm
$ sudo apt install build-essential gawk bison
```

然后解压和编译

```shell
$ tar -xJf glibc-2.28.tar.xz
$ cd glibc-2.28/
$ mkdir build
$ cd build
$ ../configure --prefix=/usr
$ make
```

到这一步后不要 `sudo make install` 立刻安装到 /usr

制作 ubuntu 的启动盘, 通过试用 ubuntu(选择 Try Ubuntu without installing) 来完成 glibc 最后的安装

进入 ubuntu live 试用环境, 连接好网络, 同样准备一下环境

```mipsasm
$ sudo apt update
$ sudo apt install build-essential gawk bison
```

确定原 ubuntu 18.04 的根目录, 这个位置下包含 ‘dev’ ‘home’ ‘usr’ 等文件夹

可以通过文件夹点击指定的分区(这里是 /dev/nvme0n1p4)完成挂载

最后进入原 ubuntu 18.04 编译 glibc 的位置, 通过 `sudo make install DESTDIR=xxx` 安装, xxx 为原 ubuntu 18.04 的根目录

不指定 DESTDIR 时, 会安装至现有的 ubuntu 18.04 live 中, 导致当前的 ubuntu 18.04 崩溃

最后重启, 查看 glibc 的版本

这种方法仅解决了 ubuntu 18.04 系统层面上 glibc 2.28 的兼容问题, 但是 ubuntu 18.04 安装源中的软件不一定兼容 glilbc 2.28

在升级软件或新安装软件时可能会遇到 “core segmentfault” 的报错, 所以这种方式强烈不推荐



## Ref

https://gitcode.csdn.net/65e935d41a836825ed78d5d8.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTE3MjYwMSwiZXhwIjoxNzExMzY4NDEwLCJpYXQiOjE3MTA3NjM2MTAsInVzZXJuYW1lIjoiemhvdWp1ZXhpYW8ifQ.Gx76GsG9uZlVza2jSRhK2Ii-YSlDPlQbYS6BiBT3pQM

