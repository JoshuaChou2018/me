# docker拉取镜像修改打包教程


近期因为工作需求和提高用户友好度的考量需要对软件进行Docker打包，于是总结以下简易流程。



1. **拉取镜像，如果需要预先配置好CUDA等，可以搜索对应镜像：**

   ```
   docker pull nvidia/cuda:12.2.2-cudnn8-devel-ubuntu22.04
   ```

2. **进入镜像，修改软件配置环境等：**

   ```
   docker run --gpus all -it nvidia/cuda:12.2.2-cudnn8-devel-ubuntu22.04 /bin/bash
   apt-get update && apt-get install -y wget nano vim curl less
   ```

3. **安装Conda环境以及其它需要的软件**

   ```
   curl -O https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh
   bash Anaconda3-2023.09-0-Linux-x86_64.sh
   ```

4. **新建repository**

   https://hub.docker.com/repository/

5. ##### 用docker commit从容器打包镜像

   ```
   sudo docker ps -a
   sudo docker commit -m "AutoBA" -a "juexiao_zhou (www.joshuachou.ink)" 12748b01449a joshuachou666/autoba:cuda12.2.2-cudnn8-devel-ubuntu22.04-autoba0.0.3
   ```

   然后docker images就能在本地找到打包好的镜像

6. **上传镜像**

   ```
   # sudo docker login --username=用户名
   sudo docker login --username=admin
   
   # sudo docker push 镜像tag
   sudo docker push joshuachou666/autoba:cuda12.2.2-cudnn8-devel-ubuntu22.04-autoba0.0.3
   ```

6. **重新拉取镜像测试**

   ```
   docker pull joshuachou666/autoba:cuda12.2.2-cudnn8-devel-ubuntu22.04-autoba0.0.3
   docker run --rm --gpus all -it joshuachou666/autoba:cuda12.2.2-cudnn8-devel-ubuntu22.04-autoba0.0.3 /bin/bash
   ```

   

**FQA**

1. --gpu all参数不能使用，错误：could not select device driver "" with capabilities: [[gpu]] 

   ```
   curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | \
     sudo apt-key add -
   distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
   curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | \
     sudo tee /etc/apt/sources.list.d/nvidia-docker.list
   sudo apt-get update
   sudo apt install -y nvidia-docker2
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

   运行上述代码后，重新docker run --gpus all即可

2. 安装完Conda环境之后，在当前的shell中不能使用conda命令和激活环境，但是又不想exit

   ```
   export PATH="/root/anaconda3/bin:$PATH"
   . "/root/anaconda3/etc/profile.d/conda.sh"
   ```

3. invalid reference format error when using docker commit 

   - This is because image names can only consist of lowercase (`a-z`) characters

   - [REPOSITORY[:TAG]]

