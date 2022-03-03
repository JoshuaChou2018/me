# lc1570. Dot Product of Two Sparse Vectors


给定两个稀疏向量，计算它们的点积（数量积）。

实现类 SparseVector：

SparseVector(nums) 以向量 nums 初始化对象。
dotProduct(vec) 计算此向量与 vec 的点积。
稀疏向量 是指绝大多数分量为 0 的向量。你需要 高效 地存储这个向量，并计算两个稀疏向量的点积。

进阶：当其中只有一个向量是稀疏向量时，你该如何解决此问题？

 

示例 1：

输入：nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]

输出：8

解释：v1 = SparseVector(nums1) , v2 = SparseVector(nums2)

v1.dotProduct(v2) = 1*0 + 0*3 + 0*0 + 2*4 + 3*0 = 8

示例 2：

输入：nums1 = [0,1,0,0,0], nums2 = [0,0,0,0,2]

输出：0

解释：v1 = SparseVector(nums1) , v2 = SparseVector(nums2)

v1.dotProduct(v2) = 0*0 + 1*0 + 0*0 + 0*0 + 0*2 = 0

示例 3：

输入：nums1 = [0,1,0,0,2,0,0], nums2 = [1,0,0,0,3,0,4]

输出：6


提示：

n == nums1.length == nums2.length

1 <= n <= 10^5

0 <= nums1[i], nums2[i] <= 100

##### 解题思路

这个题的关键点在于用什么数据形式来存储稀疏向量。因为稀疏向量大部分地方都是0，所以使用list来存储是非常低效的。所以我们可以考虑用hash的形式来存储不为0的位置的数据。两个向量点乘的时候，只有两个vector中都不为0，才能对最后的结果产生影响。

因此，这个题目换个思路就是把hash化后的两个vector，有对应key的位置乘起来。

##### Answer

```python
class SparseVector:
    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.h=self.hashit(nums)
        
    def hashit(self,l):
        h={}
        for i in range(len(l)):
            if l[i]!=0:
                h[i]=l[i]
        return h

    # Return the dotProduct of two sparse vectors
    def dotProduct(self, vec):
        """
        :type vec: 'SparseVector'
        :rtype: int
        """

        hv=vec.h
        ans=0
        for key in self.h.keys():
            try:
                ans+=self.h[key]*hv[key]
            except:
                pass
        return ans
```


