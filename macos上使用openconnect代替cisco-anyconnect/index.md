# macOS上使用Openconnect代替Cisco Anyconnect


今天Cisco Anyconnect莫名奇妙用不了，重新安装却提示安装器错误，于是找到了Openconnect这个替代品

下面说下Openconnect安装方法：

命令行模式:

```
brew install openconnect
```

GUI模式:

```
brew install openconnect-gui --cask
```

安装完之后, 发现GUI打不开, 提示来自不被信任的开发者, 这个时候需要我们开启权限允许所有来源的软件:

```
sudo spctl --master-disable
```


