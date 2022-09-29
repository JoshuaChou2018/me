# [转载] 谷歌开源计算框架JAX”


 ![微信图片_20220112140819.png](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/13c5ca4ab1d74eabb4de40ba585536a9.v8Ccmw.png)



相信大家对numpy, Tensorflow, Pytorch已经极其熟悉，不过，你知道JAX吗？ JAX发布之后，有网友进行了测试，发现，使用JAX，Numpy运算可以快三十多倍！ 



下面是使用Numpy的运行情况：



```
import numpy as np  # 使用标准numpy，运算将在CPU上执行。
x = np.random.random([5000, 5000]).astype(np.float32)
%timeit np.matmul(x, x)
```



运行结果：



```
1 loop, best of 3: 3.9 s per loop 而下面是使用JAX的Numpy的情况：
import jax.numpy as np # 使用"JAX版"的numpy from jax import random # 注意JAX下随机数API有所不同 x = random.uniform(random.PRNGKey(0), [5000, 5000]) %timeit np.matmul(x, x)
```



运行情况：



```
1 loop, best of 3: 109 ms per loop
```



我们可以发现，使用原始numpy，运行时间大概为3.9s，而使用JAX的numpy，运行时间仅仅只有0.109s，速度上直接提升了三十多倍！ 



是不是很神奇？ 那JAX到底是什么？



JAX是谷歌开源的、可以在CPU、GPU和TPU上运行的numpy，是针对机器学习研究的高性能自微分计算框架。



简单来说，就是GPU和TPU加速、支持自动微分(autodiff)的numpy。



 ![微信图片_20220112140824.png](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/af03036fa8bf4d74bff21ae4c7f44c1b.oT9EAO.png)



> 快速入门链接：https://jax.readthedocs.io/en/latest/notebooks/quickstart.html



 我们都知道，numpy是Python下的基础数值运算库，应用非常广泛，如果要用Python进行科学计算或者机器学习，没人能够离得了它。



 但是，numpy并不支持GPU或者其他硬件加速器，也缺少对backpropagation的内置支持，此外，Python自身也有速度限制，



因此，在生产环境下使用numpy训练或者部署深度学习模型的人很少。 不过numpy也有它独特的魅力：底层、灵活、调试方便、API稳定且为大家所熟悉，从而深受研究者的喜爱。



 而JAX的主要出发点就是将numpy的以上优势与硬件加速结合，与依赖于预编译核和快速C++代码的Pytorch相比，JAX可以让我们能够在高级接口使用自己最喜欢的加速器进行编写。 在最高层，JAX结合了XLA&Autograd，来加速用户开发的基于线性代数的项目。 



> Github项目地址：https://github.com/google/jax



![微信图片_20220112140826.png](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/05e711155825470c93cc9faef3e46a96.TUzw6m.png)



此外，入门JAX的过程非常自然简单——许多人每天都在处理numpy的语法和规定，而JAX则大大减少了用户的这些烦恼。 



目前，JAX支持在Linux (Ubuntu 16.04或更高版本)和macOS(10.12或更高版本)平台上安装或构建，Windows用户可以通过Windows的Linux子系统在CPU和GPU上使用JAX。 



参考链接：



https://roberttlange.github.io/posts/2021/02/cma-es-jax/

https://roberttlange.github.io/posts/2020/03/blog-post-10/

https://jax.readthedocs.io/en/latest/notebooks/quickstart.html

https://www.zhihu.com/question/306496943/answer/1041519580



**转载自https://developer.aliyun.com/article/853693**


