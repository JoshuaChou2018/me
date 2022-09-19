# CKKS


## What’s is CKKS

| Plain Computation             | Encrypted Computation |
| ----------------------------- | --------------------- |
| bool, int (uint 64), modulo p | BGV, BFV, TFHE        |
| double (float)                | CKKS                  |

![image-20220918162117066](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220918162117066.Ku5Nj6.png)

## Approximate arithmetic

![image-20220918162537891](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220918162537891.9Y2Dr7.png)

For floating-point arithmetic, we keep the bits of significand to be the same.

For fixed-point arithmetic, we keep the scaling factor to be the same.

## Algorithms in CKKS

![image-20220918162900736](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220918162900736.SXIN4t.png)

## Encoding and decoding

![image-20220918163515634](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220918163515634.RwOjkR.png)

在编码过程中需要使用比较大的scaling factor，这样可以保证更大的精度。

## Encrypt and decrypt

![image-20220918164003975](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220918164003975.asv6vQ.png)

## Ref

https://www.youtube.com/watch?v=iQlgeL64vfo

