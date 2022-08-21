# Run Ubuntu Linux in Docker with Desktop Environment and VNC


# Run Ubuntu Linux in Docker with Desktop Environment and VNC

## Step 1 – Install Docker on your System

```
sudo systemctl start docker && sudo systemctl enable docker
```

Add your system user to the Docker group to be able to execute Docker commands without ***sudo\***.

```
sudo usermod -aG docker $USER
newgrp docker
```

Verify the installed Docker version.

```
$ docker version
Client: Docker Engine - Community
 Version:           20.10.12
 API version:       1.41
 Go version:        go1.16.12
 Git commit:        e91ed57
 Built:             Mon Dec 13 11:45:48 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true
....
```

## Step 2 – Pull the Ubuntu Docker Image

As said earlier, there are several images for Ubuntu that can be pulled. These images are available on the[ Docker](https://hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc/tags/) page and can be pulled using Docker as shown.

```
##For Ubuntu 20.04 (latest)
docker pull dorowu/ubuntu-desktop-lxde-vnc:latest

##For Focal with LXDE
docker pull dorowu/ubuntu-desktop-lxde-vnc:focal

##For Focal with LXQt
docker pull dorowu/ubuntu-desktop-lxde-vnc:focal-lxqt

##For Bionic with LXDE
docker pull dorowu/ubuntu-desktop-lxde-vnc:bionic

##For Bionic with LXQt
docker pull dorowu/ubuntu-desktop-lxde-vnc:bionic-lxqt

##For Trusty 
docker pull dorowu/ubuntu-desktop-lxde-vnc:trusty

##For Xenial
docker pull dorowu/ubuntu-desktop-lxde-vnc:xenial
```

Once the desired Ubuntu image has been pulled, check if it is available in the local registry.



```
$ docker images
REPOSITORY                       TAG       IMAGE ID       CREATED         SIZE
dorowu/ubuntu-desktop-lxde-vnc   latest    1a89db715923   10 months ago   1.32GB
```

## Step 3 – Run the Ubuntu Container with Desktop Environment

Here, we will go through several methods with configuration on how you can run the Ubuntu container to give you an intuitive experience.

### Quick Start.

You can simply run the container and access it via port **6080** using the command below.

```
docker run -d \
  --name ubuntu_desktop \
  -v /dev/shm:/dev/shm \
  -p 6080:80 \
  dorowu/ubuntu-desktop-lxde-vnc
```

In the above command, we have set the container name to ***ubuntu_desktop\*** and a persistent volume at ***/dev/shm\*** Remember to replace **ubuntu-desktop-lxde-vnc** with the appropriate image pulled.

Check if the container is running with the port exposed.

```
$ docker ps
CONTAINER ID   IMAGE                            COMMAND         CREATED          STATUS                             PORTS                                   NAMES
f8fd69e3865e   dorowu/ubuntu-desktop-lxde-vnc   "/startup.sh"   17 seconds ago   Up 15 seconds (health: starting)   0.0.0.0:6080->80/tcp, :::6080->80/tcp   ubuntu_desktop
```

As seen from the output, we have port **6080** exposed. Allow it through the firewall and proceed to access the Ubuntu Desktop using the URL [http://IP_Address:6080/](http://ip_address:6080/).

### Set HTTP Base Authentication

You can also set a password to be used when accessing the HTTP page on port **6080** by adding the **HTTP_PASSWORD** variable to the above command:

```
docker run -d \
  --name ubuntu_desktop \
  -e HTTP_PASSWORD=Passw0rd \
  -v /dev/shm:/dev/shm \
  -p 6080:80 \
  dorowu/ubuntu-desktop-lxde-vnc
```

Now accessing the page, you will be required to provide a password.

### Enable VNC Viewer

The VNC viewer is accessed via a separate port **5900** that needs to be exposed in order to access it. The VNC Viewer port can be exposed as below.

```
docker run -d \
  --name ubuntu_desktop \
  -v /dev/shm:/dev/shm \
  -p 6080:80 \
  -p 5900:5900 \
  dorowu/ubuntu-desktop-lxde-vnc
```

Here, the VNC viewer should be available on port ***5900\***.

You can as well set a password for the viewer by adding the **VNC_PASSWORD** variable to the above command:

```
docker run -d \
  --name ubuntu_desktop \
  -e VNC_PASSWORD=StrongPassword \
  -v /dev/shm:/dev/shm \
  -p 6080:80 \
  -p 5900:5900 \
  dorowu/ubuntu-desktop-lxde-vnc
```

### Encrypt with SSL.

You can generate SSL certificates for encryption. In this guide, we will generate self-signed certificates as below.



Ensure that **OpenSSL** is installed on your system before you proceed:

```
mkdir -p ssl
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ssl/nginx.key -out ssl/nginx.crt
```

Now when running the container, you need to specify the **SSL_PORT** and the **path** to the generated certificate as below.

```
docker run -d \
  --name ubuntu_desktop \
  -v /dev/shm:/dev/shm \
  -p 6081:443 \
  -e SSL_PORT=443 \
  -v ${PWD}/ssl:/etc/nginx/ssl \
  dorowu/ubuntu-desktop-lxde-vnc
```

Here, you can access the Ubuntu Desktop using the URL [https://IP_address:6081](https://ip_address:6081/).

# Ref

https://computingforgeeks.com/run-ubuntu-linux-in-docker-with-desktop-environment-and-vnc/https://www.youtube.com/watch?v=umqz7kKWxyw)

