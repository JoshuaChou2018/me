# cannot create directory ‘disk4’: Read-only file system




**问题描述**：近期重启Ubuntu发现home目录写文件报错

```
cannot create directory ‘disk4’: Read-only file system
```

**解决方案**：

```
sudo mount -o rw,remount /
```


