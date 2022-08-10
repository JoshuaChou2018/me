# Fully homomorphic encryption (FHE)


# 全同态加密 Fully homomorphic encryption (FHE)

## What’s is FHE

第一种形式：同时使用secret key加密和解密，public key用于第三方加密进行同态计算

![image-20220810161455665](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810161455665.7Sogoe.png)

第二种形式：asymmetric FHE，只使用public key进行加密，secret key用于解密

![image-20220810161707363](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810161707363.4nIJAt.png)

**Efficient FHE is a giant leap towards httpz://**

? what’s httpz?

## History

![image-20220810162634078](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810162634078.kd7s8b.png)

**Major task**: find a new scheme to combine both addition and multiplication together.

## 1. First generation

Plain text: single bit

![image-20220810162938730](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810162938730.6YwAEf.png)

这个方法的主要问题是noise，随着计算的叠加，there is a notion of noise in ciphertexts，noise accumulates

1. Defining noise budget thourgh defining parameters

2. noise growth is exponential
3. bootstrapping to rescure (decrease the noise)

**Somewhat homomorphic encyption (SHE)**

初代的FHE目标是每一步同态计算，都进行一次bootstrapping，来抑制噪音增加。但是bootstrapping的计算消耗太大，所以SHE的目标是控制在output时的噪音水平，保证是可以接受的。

![image-20220810163706513](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810163706513.adONzi.png)

## 2. Second generation

targeting the exponential growing noise

![image-20220810164134885](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810164134885.dqkLd9.png)

![image-20220810164255110](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810164255110.L8cELM.png)

## 3. Third generation: GSW

只是概念上的简化，但是无法实用。

![image-20220810164410551](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810164410551.9fFNfF.png)

## 4. 4th generation: Torus FHE, TFHE

![image-20220810164528414](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810164528414.a1nVpv.png)

## Open-source FHE librabies

FV-NFLlib

SEAL

HEAAN

TFHE

HElib

nuFHE

Palisade

## Two encryption

![image-20220810172343243](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810172343243.YM9jwM.png)

## Plaintext encoding

![image-20220810172439231](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810172439231.q2rqqZ.png)

但是在计算的时候，noise会在右侧累积。

![image-20220810172529388](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810172529388.zPkVYt.png)

通过bootstrapping，可以减少右侧的noise

![image-20220810172605531](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810172605531.e9V2vW.png)

**LWE ciphertexts are homomorphic**

![image-20220810172707491](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220810172707491.kX7bKI.png)



# Ref

Complete talk: [Introduction to Homomorphic Encryption (by Pascal Paillier) - YouTube](https://www.youtube.com/watch?v=umqz7kKWxyw)

