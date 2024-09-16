# NVIDIA driver install - Error: Unable to find the kernel source tree




**Problem:** NVIDIA driver install - Error: Unable to find the kernel source tree

**Solution:**

```
sudo apt-get install linux-headers-`uname -r`
```


