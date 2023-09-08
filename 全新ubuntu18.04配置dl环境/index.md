# 全新Ubuntu18.04配置DL环境，保姆级教程


1. 获取IP地址

   ```shell
   sudo apt install net-tools
   ifconfig
   ```

2. 安装openssh，这样可以远程ssh连接服务器

   ```shell
   sudo apt install openssh-server
   ```

3. 安装gcc

   ```
   sudo apt install gcc g++ make
   ```

4. 安装NVIDIA驱动

   1. 在https://www.nvidia.com/Download/index.aspx?lang=cn下载对应型号驱动

   2. ```
      wget https://cn.download.nvidia.com/XFree86/Linux-x86_64/535.104.05/NVIDIA-Linux-x86_64-535.104.05.run
      ```

   3. 禁用nouveau

      ```shell
      sudo nano /etc/modprobe.d/blacklist.conf
      # 最后一行加入
      blacklist nouveau
      sudo update-initramfs -u
      sudo reboot
      ```

   4. 检查nouveau是否不在运行

      ```
      lsmod | grep nouveau  # 没输出代表禁用生效
      sudo telinit 3
      ```

   5. 安装驱动

      ```
      sudo chmod a+x NVIDIA-Linux-x86_64-535.104.05.run
      sudo sh ./NVIDIA-Linux-x86_64-535.104.05.run --no-opengl-files
      ```

      **–no-opengl-files 参数必须加否则会循环登录，也就是loop login**

5. 安装CUDA 11.1

   ```shell
   wget https://developer.download.nvidia.com/compute/cuda/11.1.0/local_installers/cuda_11.1.0_455.23.05_linux.run
   sudo chmod a+x cuda_11.1.0_455.23.05_linux.run
   # 勾选的时候不要再安装NVIDIA驱动 弹出xorg.conf时选择NO
   sudo sh cuda_11.1.0_455.23.05_linux.run
   
   nano ~/.bashrc
   # 添加以下两行
   export PATH=/usr/local/cuda-11.1/bin:$PATH
   export LD_LIBRARY_PATH=/usr/local/cuda-11.1/lib64:$LD_LIBRARY_PATH
   
   source ~/.bashrc
   # 测试cuda
   nvcc -V
   ```

6. 安装anaconda

   ```
   wget https://repo.anaconda.com/archive/Anaconda3-2023.07-2-Linux-x86_64.sh
   bash Anaconda3-2023.07-2-Linux-x86_64.sh
   
   # Do you wish the installer to initialize Anaconda3
   by running conda init? [yes|no]
   yes
   ```


**到这一步就已经完成了，Cheers！**

