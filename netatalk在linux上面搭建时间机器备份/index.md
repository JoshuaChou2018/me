# Netatalk在Linux上面搭建时间机器备份


安装 Nettalk 

```
sudo apt install netatalk -y
sudo apt install avahi-daemon -y
```

Netatlk 3.x 只使用一个配置文件 `/etc/netatalk/afp.conf` :

```
[Global]
 mimic model = TimeCapsule6,106
 log level = default:warn
 log file = /var/log/afpd.log
 hosts allow = 192.168.1.0/16

[Homes]
 basedir regex = /home

[TimeMachine]
 path = /home/joshuachou/myDisk/TimeMachine
 valid users = joshuachou
 time machine = yes
```

并且确保 `avahi` 处于运行状态：

`systemctl status avahi-daemon.service` 查看 `avahi` 运行状态。

重启Netatalk服务：

```
sudo service avahi-daemon restart
sudo service netatalk restart
```

## Mac 备份非常慢

如果你的 Mac 是第一次在这个上面进行备份，第一次备份一般都很慢，可以调节参数的方式将其调节为全速进行备份，记得备份完后将其调整回来，否则可能会导致你的电脑在正常使用的时候由于同时在备份导致卡顿。

打开终端，执行如下命令开启全速备份：

```
sudo sysctl debug.lowpri_throttle_enabled=0
```

关闭全速备份：

```
sudo sysctl debug.lowpri_throttle_enabled=1
```

