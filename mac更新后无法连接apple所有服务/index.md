# Mac更新后无法连接Apple所有服务


### 问题描述

Mac更新后无法使用任何Apple服务，比如无法退出Apple ID，无法进入Apple Store，但是其它网络连接均正常。

### 解决方案

- 打开/Library/Preferences/SystemConfiguration 这个文件夹
- 删除**除了com.apple.Boot.plist 之外**的其他文件，然后重新启动

