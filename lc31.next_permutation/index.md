# lc31. Next Permutation


A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order.

- For example, for `arr = [1,2,3]`, the following are considered permutations of `arr`: `[1,2,3]`, `[1,3,2]`, `[3,1,2]`, `[2,3,1]`.

The **next permutation** of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the **next permutation** of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

- For example, the next permutation of `arr = [1,2,3]` is `[1,3,2]`.
- Similarly, the next permutation of `arr = [2,3,1]` is `[3,1,2]`.
- While the next permutation of `arr = [3,2,1]` is `[1,2,3]` because `[3,2,1]` does not have a lexicographical larger rearrangement.

Given an array of integers `nums`, *find the next permutation of* `nums`.

The replacement must be **[in place](http://en.wikipedia.org/wiki/In-place_algorithm)** and use only constant extra memory.

 

**Example 1:**

```
Input: nums = [1,2,3]
Output: [1,3,2]
```

**Example 2:**

```
Input: nums = [3,2,1]
Output: [1,2,3]
```

**Example 3:**

```
Input: nums = [1,1,5]
Output: [1,5,1]
```

 

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

###### 解题思路

首先我们要知道，什么情况下是没有下一个（除了回到正序第一个）：当nums所有的数字都是严格降序排列。所以我们首先需要判断num是否严格降序，如果是则返回严格升序排列。

那么如何判断存在下一个刚刚好更大的数呢？只要nums中存在nums[i-1]<nums[i]的情况就存在。既然如此，我们只要把nums[i-1]和nums[i:~]中恰好大于nums[i-1]的数交换位置即可。但是这样一来nums[i: ~]中也可能继续存在有恰好更大的排列。因此，我们注意到，最终我们需要把nums[i: ~]的数字全部严格降序排列。

所以最终的解题思路是：

1. 对nums，从右边往左边扫，寻找nums[i-1]<nums[i]的情况
2. 如果无法找到（严格降序），那么返回严格升序序列
3. 如果可以找到，那么把num[i-1]和num[i: ~]中最小的数字交换，然后把num[i: ~]全部严格升序排列

```python
class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        for i in range(2,len(nums)+1):
            if nums[-i]<nums[-i+1]:
                min_value=None
                for j in range(1,i):
                    if min_value==None and nums[-j]>nums[-i]:
                        min_value=nums[-j]
                    if nums[-j]<=min_value:
                        min_idx=-j
                        min_value=nums[-j]
                nums[-i],nums[min_idx]=nums[min_idx],nums[-i]
                nums[-i+1:]=sorted(nums[-i+1:],reverse=False)
                return
        nums[:]=sorted(nums,reverse=False)
```

这里有几个坑需要注意：

1. 题目中强调不需要return，而是直接在nums上修改，因此如果是新建内存空间再赋值给nums，有可能无法通过。
2. 记得最后如果是严格降序，需要返回严格升序。
3. 在剩下序列中找的最小值，一定要大于nums[i-1]

