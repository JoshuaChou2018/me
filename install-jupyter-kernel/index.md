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



**Update 2022.09.25:**

If you encounter the error: **ImportError: cannot import name 'AsyncGenerator'**

The reason is that the version of prompt_toolkit does not match Python 3.6

The solution is to reduce the version

```
pip install --upgrade prompt-toolkit==2.0.1
```

Then you can add the kernel to notebook.

