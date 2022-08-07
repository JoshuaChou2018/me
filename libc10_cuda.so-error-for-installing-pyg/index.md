# libc10_cuda.so error for installing pyG


After installing PyG, here is the error:

**libc10_cuda.so: cannot open shared object file: No such file or directory**



**Solution**

```shell
conda install pytorch==1.11.0 cudatoolkit=11.3 -c pytorch
conda install pyg -c pyg
```

