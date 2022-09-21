# Homomorphic Encryption


## Outsourcing computation, privately

![image-20220919154446784](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919154446784.aYwPWN.png)

Homomorphic evaluation function:

Eval: f, Enc(x) -> Enc(f(x))

## Fully homomorphic encryption

![image-20220919154723892](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919154723892.p8PeXK.png)

**Fully** homomorphic = correctness for **any** efficient f = correctness for **universal** set

### Approximate eigenvector method

![image-20220919160158938](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919160158938.DZqLdh.png)

基于GSW13的特征向量的构造，我们可以在ciphertext上计算加法和乘法，然后可以通过secret key恢复出message的计算结果。但是这个方法不安全，因为特征向量很容易被找到。

**idea：**使用approximate eigenvectors，在secret key右乘cipher text

![image-20220919160511119](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919160511119.ZDDasR.png)

![image-20220919162526756](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919162526756.EzrmQ6.png)

![image-20220919162834463](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919162834463.0N5n69.png)

### Learning with errors (LWE) R05

![image-20220919190114289](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919190114289.FJ89eg.png)

### **Rearranging notation**

![image-20220919190916495](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919190916495.flSCYd.png)

**basic idea: ** we have a matrix A, we can generate a matrix  s, such that **sA=$\eta$**

![image-20220919191541347](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919191541347.7kqUzm.png)

### Encryption scheme from LWE

#### Encryption



![image-20220919191851050](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919191851050.sVByoT.png)

#### Decryption 

![image-20220919192128171](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919192128171.9naakJ.png)

it can be generalized to matrices.

#### On matrices



![image-20220919192253181](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220919192253181.9ImI1D.png)



## Ref

https://www.youtube.com/watch?v=O8IvJAIvGJo

