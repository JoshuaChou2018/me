# CUDA unknown error - this may be due to an incorrectly set up environment


# Problem description

```shell
>>> torch.cuda.is_available()                                                     
/home/python3.8/site-packages/torch/cuda/__init__.py:141: UserWarning: CUDA initialization: CUDA unknown error - this may be due to an
 incorrectly set up environment, e.g. changing env variable CUDA_VISIBLE_DEVICES after program start. Setting the available devices to be zero. (Triggered internally at /opt/con
da/conda-bld/pytorch_1708025845899/work/c10/cuda/CUDAFunctions.cpp:108.)   return torch._C._cuda_getDeviceCount() > 0                        

False         
```

But both nvcc - V and nvidia-smi still work

# Solution

```shell
sudo rmmod nvidia_uvm
sudo modprobe nvidia_uvm
```


