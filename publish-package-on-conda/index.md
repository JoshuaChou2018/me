# Publish python package on Anaconda


#### Install Conda Packaging Tool

```bash
conda install conda-build anaconda-client
```

### File Structure

```
    - home/
        - my_package/
            - my_package/
                - package_lib/
                - setup.py
                - README.md
                - run_test.py
            - build.sh
            - meta.yaml    
```

### meta.yaml

This file tells conda-build how to package files under `my_package/`



```python
    package:
      name: my_package
      version: 1.1.2
    
    source:
      path: my_package/my_package/
     
    build:
      number: 0
    
    requirements:
      build:
        - python >=3
        - setuptools
      run:
        - python >=3
        - numpy >=1.20
        - scipy
        - pandas
        - scikit-learn >=0.22
        - lightgbm
        - matplotlib
        - seaborn
        - plink >=1.9
    
    test:
      source_files:
        - run_test.py

    about:
      home: https://github.com/JoshuaChou2018
      license: MIT
```

### build.sh

The build.sh script contains methods to compile and install. So we use setuptools to complete the compilation and installation process.

Content of build.sh

```python
    # Install my_package
    $PYTHON setup.py install
```

### setup.py

```python
# -*- coding: utf-8 -*-

from setuptools import setup, find_packages

setup(
    name='my_package',
    version='1.0.3',
    description=(
        'my_package'
    ),
    author='my_package',
    author_email='my_package',
    maintainer='my_package',
    maintainer_email='my_package',
    license='MIT License',
    url='https://github.com/JoshuaChou2018/my_package',
    packages=find_packages(),
    entry_points={
        'console_scripts': [
            'run = my_package.entry:main',
        ]
    },
    classifiers=[
        'Operating System :: OS Independent',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3'
    ],
    python_requires='>=3'
)
```

### Start build

```python
conda build my_package/
```

### Publish

```python
anaconda login
anaconda upload /home/miniconda3/conda-bld/linux-64/my_package-1.0.0-py39_0.tar.bz2
```


