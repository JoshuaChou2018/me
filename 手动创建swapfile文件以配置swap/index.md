# 手动创建swapfile文件以配置swap




```
free -h
sudo swapoff /swapfile  
sudo rm  /swapfile
df -h
sudo fallocate -l 64G /swapfile
ls -lh /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon --show
free -h
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```


