# lc238. Product of Array Except Self


Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation. 

**Example 1:**

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Example 2:**

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**

- `2 <= nums.length <= 105`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer. 

**Follow up:** Can you solve the problem in `O(1) `extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

###### 解题思路:

题目非常鸡贼。最简单的想法是第一遍遍历把所有数字乘起来，然后第二遍遍历把乘积除以对应位置的数，如果是0则不除。结果发现题目中进一步要求 without using the division operation.

**左右乘积**

用两次遍历，第一次遍历维护一个左乘积，第二遍维护一个右乘积。

第三次遍历，把左乘积和右乘积乘起来，就是每个位置（exclude）之后其它部分的乘积。

```python
class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        left=[]
        right=[]
        _mul=1
        for i in range(len(nums)):
            left.append(_mul)
            _mul*=nums[i]
        _nums=nums[::-1]
        _mul=1
        for i in range(len(_nums)):
            right.append(_mul)
            _mul*=_nums[i]
        right=right[::-1]
        return [left[i]*right[i] for i in range(len(left))]
```

在这个算法下，因为我们有一个循环，所以时间复杂度是O(N)，同时我们需要维护和nums同长的一个list，所以空间复杂度是O(N)

**进阶，空间复杂度O(1)**

如果需要实现空间复杂度O(1)，意味着除了最终的输出答案，我们中间不能使用任何和nums等长的list存储中间答案。

所以最简单的方案是我们只维护一个final result list，然后通过两次遍历来更新final。

```python
class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        res=[1 for i in range(len(nums))]
        _mul=1
        for i in range(len(nums)):
            res[i]*=_mul
            _mul*=nums[i]
        _mul=1
        for i in range(len(nums)):
            res[-i-1]*=_mul
            _mul*=nums[-i-1]
        return res
```

这里需要注意在计算右乘积时使用的index，因为我们使用的是-i，所以i=0的时候会出现问题，我们需要在idx上减去1.

