# Ubuntu配置VNCServer，一定能用，不白屏灰屏


- 安装基础软件

  ```
  sudo apt update
  sudo apt-get upgrade
  sudo apt-get install gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal
  sudo apt install tightvncserver
  vncserver
  
  注: 在防火墙上打开 VNC Server 的监听端口
  VNC Server 用到了三个端口：5801(*)、5901(*)、6001
  ```

- 修改~/.vnc/xstartup

  ```
  #!/bin/bash
  export $(dbus-launch)
  export XKL_XMODMAP_DISABLE=1
  export XDG_CURRENT_DESKTOP="GNOME-Flashback:Unity"
  export XDG_MENU_PREFIX="gnome-flashback-"
  unset SESSION_MANAGER
  
  gnome-panel &
  gnome-settings-daemon &
  metacity &
  nautilus &
  gnome-terminal &
  
  # [ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
  # [ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
  
  autocutsel -fork
  xrdb $HOME/.Xresources
  xsetroot -solid grey
  vncconfig -iconic &
  x-terminal-emulator -geometry 80x24+10+10 -ls -title "$VNCDESKTOP Desktop" &
  gnome-session --session=gnome-flashback-metacity --disable-acceleration-check --debug &
  ```

- 启动

  ```
  chmod +x ~/.vnc/xstartup
  vncserver :1
  ```



**机器无显示屏情况-设置虚拟显示屏**

- 安装xserver-xorg

```
sudo apt install xserver-xorg-video-dummy
```

- After that, save this config file as `dummy-1920x1080.conf`


```
Section "Monitor"
  Identifier "Monitor0"
  HorizSync 28.0-80.0
  VertRefresh 48.0-75.0
  # https://arachnoid.com/modelines/
  # 1920x1080 @ 60.00 Hz (GTF) hsync: 67.08 kHz; pclk: 172.80 MHz
  Modeline "1920x1080_60.00" 172.80 1920 2040 2248 2576 1080 1081 1084 1118 -HSync +Vsync
EndSection

Section "Device"
  Identifier "Card0"
  Driver "dummy"
  VideoRam 256000
EndSection

Section "Screen"
  DefaultDepth 24
  Identifier "Screen0"
  Device "Card0"
  Monitor "Monitor0"
  SubSection "Display"
    Depth 24
    Modes "1920x1080_60.00"
  EndSubSection
EndSection
```

- Now you can start X.org

  ```
  sudo X -config dummy-1920x1080.conf &
  
  ###
  X.Org X Server 1.19.6
  Release Date: 2017-12-20
  X Protocol Version 11, Revision 0
  Build Operating System: Linux 4.4.0-138-generic x86_64 Ubuntu
  Current Operating System: Linux ubuntu-s-1vcpu-2gb-fra1-01 4.15.0-45-generic #48-Ubuntu SMP Tue Jan 29 16:28:13 UTC 2019 x86_64
  Kernel command line: BOOT_IMAGE=/boot/vmlinuz-4.15.0-45-generic root=LABEL=cloudimg-rootfs ro console=tty1 console=ttyS0
  Build Date: 25 October 2018  04:11:27PM
  xorg-server 2:1.19.6-1ubuntu4.2 (For technical support please see http://www.ubuntu.com/support) 
  Current version of pixman: 0.34.0
          Before reporting problems, check http://wiki.x.org
          to make sure that you have the latest version.
  Markers: (--) probed, (**) from config file, (==) default setting,
          (++) from command line, (!!) notice, (II) informational,
          (WW) warning, (EE) error, (NI) not implemented, (??) unknown.
  (==) Log file: "/var/log/Xorg.0.log", Time: Sat Feb 23 17:48:07 2019
  (++) Using config file: "dummy-1920x1080.conf"
  (==) Using system config directory "/usr/share/X11/xorg.conf.d"
  ```

- Starting your software

  Now you can start your software that needs a graphical interface as follows (we use `firefox`, and display number 0, as an example):

  ```null
  DISPLAY=:0 firefox
  ```

- Starting X.org on a specific display number

  If you want to start the X server on a specific display number, e.g. `7`, because some other dummy server is running concurrently, use this command to start the X server:

  ```null
  sudo X :7 -config dummy-1920x1080.conf
  ```


