# Ubuntu配置VNCServer，一定能用，不白屏灰屏


- 安装基础软件

  ```
  sudo apt update
  sudo apt-get upgrade
  sudo apt-get install gnome-panel gnome-settings-daemon metacity nautilus gnome-terminal
  sudo apt install tightvncserver
  vncserver
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
sudo apt-get install  xserver-xorg-core-hwe-18.04
sudo apt-get install  xserver-xorg-video-dummy-hwe-18.04  --fix-missing
```

- 增加xorg配置文件，通过指令sudo nano /usr/share/X11/xorg.conf.d/xorg.conf，添加以下内容。

```
Section "Device"
    Identifier  "Configured Video Device"
    Driver      "dummy"
EndSection

Section "Monitor"
    Identifier  "Configured Monitor"
    HorizSync 31.5-48.5
    VertRefresh 50-70
EndSection

Section "Screen"
    Identifier  "Default Screen"
    Monitor     "Configured Monitor"
    Device      "Configured Video Device"
    DefaultDepth 24
    SubSection "Display"
    Depth 24
    Modes "1920x1080"
    EndSubSection
EndSection
```

- sudo nano /usr/share/X11/xorg.conf.d/dummy-1920x1080.conf

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

- 重启机器

重启后自动启用虚拟显示屏，如果之后再需要用显示器，将/usr/share/X11/xorg.conf.d/xorg.conf文件移除，再重启机器即可。


