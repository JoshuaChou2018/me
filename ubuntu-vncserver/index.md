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

