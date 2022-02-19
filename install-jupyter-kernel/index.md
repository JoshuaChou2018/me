# Install kernel for jupyter notebook


1. **Avticate your environment，check for package ipykernel**

```
python -m ipykernel --version
```

**If it’s not installed：**

```
python -m pip install ipykernel
```

2. **Add kernel to Jupyter notebook**

```
python -m ipykernel install --user --name 'kernelname'
```



3. **Check Jupyter notebook kernel**

```
jupyter kernelspec list
```

 

4. **Delet jupyter kernel**

```
jupyter kernelspec remove kernelname
```


