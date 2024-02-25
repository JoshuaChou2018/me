# How to Install and Configure VNC on Ubuntu 20.04


### Introduction

*Virtual Network Computing*, or VNC, is a connection system that allows you to use your keyboard and mouse to interact with a graphical desktop environment on a remote server. It makes managing files, software, and settings on a remote server easier for users who are not yet comfortable with the command line.

In this guide, you’ll set up a VNC server with [TightVNC](https://www.tightvnc.com/) on an Ubuntu 20.04 server and connect to it securely through an SSH tunnel. Then, you’ll use a VNC client program on your local machine to interact with your server through a graphical desktop environment.

## Prerequisites

To complete this tutorial, you’ll need:

- One Ubuntu 20.04 server with a non-root administrative user and a firewall configured with UFW. To set this up, follow our [initial server setup guide for Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04).
- A local computer with a VNC client installed. The VNC client you use must support connections over SSH tunnels:
  - On Windows, you can use [TightVNC](https://www.tightvnc.com/), [RealVNC](https://www.realvnc.com/), or [UltraVNC](https://www.uvnc.com/).
  - On macOS, you can use the built-in [Screen Sharing](https://support.apple.com/guide/mac-help/screen-sharing-overview-mh14066/mac) program, or can use a cross-platform app like [RealVNC](https://www.realvnc.com/).
  - On Linux, you can choose from many options, including `vinagre`, `krdc`, [RealVNC](https://www.realvnc.com/), or [TightVNC](https://www.tightvnc.com/).

## Step 1 — Installing the Desktop Environment and VNC Server

By default, an Ubuntu 20.04 server does not come with a graphical desktop environment or a VNC server installed, so you’ll begin by installing those.

You have many options when it comes to which VNC server and desktop environment you choose. In this tutorial, you will install packages for the latest [Xfce](https://xfce.org/) desktop environment and the TightVNC package available from the official Ubuntu repository. Both Xfce and TightVNC are known for being lightweight and fast, which will help ensure that the VNC connection will be smooth and stable even on slower internet connections.

After connecting to your server with SSH, update your list of packages:

```bash
sudo apt update
```

Now install Xfce along with the `xfce4-goodies` package, which contains a few enhancements for the desktop environment:

```bash
sudo apt install xfce4 xfce4-goodies
```

During installation, you may be prompted to choose a default display manager for Xfce. A display manager is a program that allows you to select and log in to a desktop environment through a graphical interface. You’ll only be using Xfce when you connect with a VNC client, and in these Xfce sessions you’ll already be logged in as your non-root Ubuntu user. So for the purposes of this tutorial, your choice of display manager isn’t pertinent. Select either one and press `ENTER`.

Once that installation completes, install the TightVNC server:

```bash
sudo apt install tightvncserver
```

Next, run the `vncserver` command to set a VNC access password, create the initial configuration files, and start a VNC server instance:

```bash
vncserver
```

You’ll be prompted to enter and verify a password to access your machine remotely:

```
OutputYou will require a password to access your desktops.

Password:
Verify:
```

The password must be between six and eight characters long. Passwords more than 8 characters will be truncated automatically.

Once you verify the password, you’ll have the option to create a view-only password. Users who log in with the view-only password will not be able to control the VNC instance with their mouse or keyboard. This is a helpful option if you want to demonstrate something to other people using your VNC server, but this isn’t required.

The process then creates the necessary default configuration files and connection information for the server. Additionally, it launches a default server instance on port `5901`. This port is called a *display port*, and is referred to by VNC as `:1`. VNC can launch multiple instances on other display ports, with `:2` referring to port `5902`, `:3` referring to `5903`, and so on:

```
OutputWould you like to enter a view-only password (y/n)? n
xauth:  file /home/sammy/.Xauthority does not exist

New 'X' desktop is your_hostname:1

Creating default startup script /home/sammy/.vnc/xstartup
Starting applications specified in /home/sammy/.vnc/xstartup
Log file is /home/sammy/.vnc/your_hostname:1.log
```

Note that if you ever want to change your password or add a view-only password, you can do so with the `vncpasswd` command:

```bash
vncpasswd
```

At this point, the VNC server is installed and running. Now let’s configure it to launch Xfce and give us access to the server through a graphical interface.

\##Step 2 — Configuring the VNC Server

The VNC server needs to know which commands to execute when it starts up. Specifically, VNC needs to know which graphical desktop environment it should connect to.

The commands that the VNC server runs at startup are located in a configuration file called `xstartup` in the `.vnc` folder under your home directory. The startup script was created when you ran the `vncserver` command in the previous step, but you’ll create your own to launch the Xfce desktop.

Because you are going to be changing how the VNC server is configured, first stop the VNC server instance that is running on port `5901` with the following command:

```bash
vncserver -kill :1
```

The output will look like this, although you’ll see a different PID:

```
OutputKilling Xtightvnc process ID 17648
```

Before you modify the `xstartup` file, back up the original:

```bash
mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
```

Now create a new `xstartup` file and open it in a text editor, such as `nano`:

```bash
nano ~/.vnc/xstartup
```

Then add the following lines to the file:

~/.vnc/xstartup

```
#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
```

The first line is a [*shebang*](https://en.wikipedia.org/wiki/Shebang_(Unix)). In executable plain-text files on *nix platforms, a shebang tells the system what interpreter to pass that file to for execution. In this case, you’re passing the file to the Bash interpreter. This will allow each successive line to be executed as commands, in order.

The first command in the file, `xrdb $HOME/.Xresources`, tells VNC’s GUI framework to read the server user’s `.Xresources` file. `.Xresources` is where a user can make changes to certain settings of the graphical desktop, like terminal colors, cursor themes, and font rendering. The second command tells the server to launch Xfce. Whenever you start or restart the VNC server, these commands will execute automatically.

Save and close the file after adding these lines. If you used `nano`, do so by pressing `CTRL + X`, `Y`, then `ENTER`.

To ensure that the VNC server will be able to use this new startup file properly, you’ll need to make it executable:

```bash
chmod +x ~/.vnc/xstartup
```

Then restart the VNC server:

```bash
vncserver -localhost
```

Notice that this time the command includes the `-localhost` option, which binds the VNC server to your server’s loopback interface. This will cause VNC to only allow connections that originate from the server on which it’s installed.

In the next step, you’ll establish an SSH tunnel between your local machine and your server, essentially tricking VNC into thinking that the connection from your local machine originated on your server. This strategy will add an extra layer of security around VNC, as the only users who will be able to access it are those that already have SSH access to your server.

You’ll see output similar to this:

```
OutputNew 'X' desktop is your_hostname:1

Starting applications specified in /home/sammy/.vnc/xstartup
Log file is /home/sammy/.vnc/your_hostname:1.log
```

With the configuration in place, you’re ready to connect to the VNC server from your local machine.

## Step 3 — Connecting to the VNC Desktop Securely

VNC itself doesn’t use secure protocols when connecting. To securely connect to your server, you’ll establish an SSH tunnel and then tell your VNC client to connect using that tunnel rather than making a direct connection.

Create an SSH connection on your local computer that securely forwards to the `localhost`connection for VNC. You can do this via the terminal on Linux or macOS with the following `ssh`command:

```bash
ssh -L 59000:localhost:5901 -C -N -l sammy your_server_ip
```

Here’s what this `ssh` command’s options mean:

- `-L 59000:localhost:5901`: The `-L` switch specifies that the given port on the local computer (`59000`) is to be forwarded to the given host and port on the destination server (`localhost:5901`, meaning port `5901` on the destination server, defined as `your_server_ip`). Note that the local port you specify is somewhat arbitrary; as long as the port isn’t already bound to another service, you can use it as the forwarding port for your tunnel.
- `-C`: This flag enables compression which can help minimize resource consumption and speed things up.
- `-N`: This option tells `ssh` that you don’t want to execute any remote commands. This setting is useful when you just want to forward ports.
- `-l sammy your_server_ip`: The `-l` switch let’s you specify the user you want to log in as once you connect to the server. Make sure to replace `sammy` and `your_server_ip` with the name of your non-root user and your server’s IP address.

**Note**: This command establishes an SSH tunnel that forwards information from port `5901` on your VNC server to port `59000` on your local machine via port `22` on each machine, the default port for SSH. Assuming you followed the prerequisite [Initial Server Setup guide for Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04), you will have added a UFW rule to allow connections to your server over OpenSSH.

This is more secure than simply opening up your server’s firewall to allow connections to port `5901`, as that would allow anyone to access your server over VNC. By connecting over an SSH tunnel, you’re limiting VNC access to machines that already have SSH access to the server.

If you are using PuTTY to connect to your server, you can create an SSH tunnel by right-clicking on the top bar of the terminal window, and then clicking the **Change Settings…** option:

![Right-click on top bar to reveal Change Settings option](https://assets.digitalocean.com/articles/vnc_2004/vnc_putty_topbar_arrow.png)

Find the **Connection** branch in the tree menu on the left-hand side of the PuTTY Reconfiguration window. Expand the **SSH** branch and click on **Tunnels**. On the **Options controlling SSH port forwarding** screen, enter `59000` as the **Source Port** and `localhost:5901` as the **Destination**, like this:

![Example PuTTY SSH tunnel configuration](https://assets.digitalocean.com/articles/vnc_2004/vnc_putty_reconf_local.png)

Then click the **Add** button, and then the **Apply** button to implement the tunnel.

Once the tunnel is running, use a VNC client to connect to `localhost:59000`. You’ll be prompted to authenticate using the password you set in Step 1.

Once you are connected, you’ll see the default Xfce desktop. It should look something like this:

![VNC connection to Ubuntu 20.04 server with the Xfce desktop environment](https://assets.digitalocean.com/articles/vnc_2004/vnc_xfce.png)

You can access files in your home directory with the file manager or from the command line, as seen here:

![File Manager via VNC connection to Ubuntu 20.04](https://assets.digitalocean.com/articles/vnc_2004/vnc_files.png)

Press `CTRL+C` in your local terminal to stop the SSH tunnel and return to your prompt. This will disconnect your VNC session as well.

Now you can configure your VNC server to run as a systemd service.

## Step 4 — Running VNC as a System Service

By setting up the VNC server to run as a systemd service you can start, stop, and restart it as needed, like any other service. You can also use systemd’s management commands to ensure that VNC starts when your server boots up.

First, create a new unit file called `/etc/systemd/system/vncserver@.service`:

```bash
sudo nano /etc/systemd/system/vncserver@.service
```

The `@` symbol at the end of the name will let us pass in an argument you can use in the service configuration. You’ll use this to specify the VNC display port you want to use when you manage the service.

Add the following lines to the file. Be sure to change the value of **User**, **Group**, **WorkingDirectory**, and the username in the value of **PIDFILE** to match your username:

/etc/systemd/system/vncserver@.service

```
[Unit]
Description=Start TightVNC server at startup
After=syslog.target network.target

[Service]
Type=forking
User=sammy
Group=sammy
WorkingDirectory=/home/sammy

PIDFile=/home/sammy/.vnc/%H:%i.pid
ExecStartPre=-/usr/bin/vncserver -kill :%i > /dev/null 2>&1
ExecStart=/usr/bin/vncserver -depth 24 -geometry 1280x800 -localhost :%i
ExecStop=/usr/bin/vncserver -kill :%i

[Install]
WantedBy=multi-user.target
```

The `ExecStartPre` command stops VNC if it’s already running. The `ExecStart` command starts VNC and sets the color depth to 24-bit color with a resolution of 1280x800. You can modify these startup options as well to meet your needs. Also, note that the `ExecStart` command again includes the `-localhost` option.

Save and close the file.

Next, make the system aware of the new unit file:

```bash
sudo systemctl daemon-reload
```

Enable the unit file:

```bash
sudo systemctl enable vncserver@1.service
```

The `1` following the `@` sign signifies which display number the service should appear over, in this case the default `:1` as was discussed in Step 2.

Stop the current instance of the VNC server if it’s still running:

```bash
vncserver -kill :1
```

Then start it as you would start any other systemd service:

```bash
sudo systemctl start vncserver@1
```

You can verify that it started with this command:

```bash
sudo systemctl status vncserver@1
```

If it started correctly, the output should look like this:

```
Output● vncserver@1.service - Start TightVNC server at startup
     Loaded: loaded (/etc/systemd/system/vncserver@.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2020-05-07 17:23:50 UTC; 6s ago
    Process: 39768 ExecStartPre=/usr/bin/vncserver -kill :1 > /dev/null 2>&1 (code=exited, status=2)
    Process: 39772 ExecStart=/usr/bin/vncserver -depth 24 -geometry 1280x800 :1 (code=exited, status=0/SUCCESS)
   Main PID: 39795 (Xtightvnc)
...
```

Your VNC server is now ready to use whenever your server boots up, and you can manage it with [`systemctl` commands](https://www.digitalocean.com/community/tutorials/how-to-use-systemctl-to-manage-systemd-services-and-units) like any other systemd service.

However, there won’t be any difference on the client side. To reconnect, start your SSH tunnel again:

```bash
ssh -L 59000:localhost:5901 -C -N -l sammy your_server_ip
```

Then make a new connection using your VNC client software to `localhost:59000` to connect to your server.

## Conclusion

You now have a secured VNC server up and running on your Ubuntu 20.04 server. Now you’ll be able to manage your files, software, and settings with a user-friendly graphical interface, and you’ll be able to run graphical software like web browsers remotely.

### 解决灰屏问题

vnc连接以后桌面打开是灰的，没有图标和terminal

```sh
sudo apt-get install gnome-panel
```

打开并编辑`xstartup`文件，将如下代码复制到`xstartup`文件中，替换原代码：

```sh
#!/bin/sh                                                                       

unset SESSION_MANAGER
unset DBUS_SESSION_BUS_ADDRESS
export XKL_XMODMAP_DISABLE=1
export XDG_CURRENT_DESKTOP="GNOME-Flashback:GNOME"
export XDG_MENU_PREFIX="gnome-flashback-"
[ -x /etc/vnc/xstartup ] && exec /etc/vnc/xstartup
[ -r $HOME/.Xresources ] && xrdb $HOME/.Xresources
xsetroot -solid grey
vncconfig -iconic &
#gnome-terminal &    
#nautilus &   
gnome-session --session=gnome-flashback-metacity --disable-acceleration-check &
```

关闭源端口，重新开启vnc端口，即可正常访问

## Ref

https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-20-04

