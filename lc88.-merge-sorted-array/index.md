# lc88. Merge Sorted Array


You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be *stored inside the array* `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

 

**Example 1:**

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

**Example 2:**

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

**Example 3:**

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

 

**Constraints:**

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-109 <= nums1[i], nums2[j] <= 109`

 

**Follow up:** Can you come up with an algorithm that runs in `O(m + n)` time?

##### 思路

由于nums1的后序数字全为0，并且nums1和nums2都是以升序排列，所以我们可以把两个数组从大到小依次比较，然后插入num1。因为num1和num2中的数字只会遍历一次，因此最终的时间复杂度是O(m+n)。

##### Answer

```python
class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        insert=-1
        m,n=m-1,n-1
        while m>=0 and n>=0:
            if nums1[m]>nums2[n]:
                nums1[m],nums1[insert]=nums1[insert],nums1[m]
                m-=1
            elif nums1[m]<=nums2[n]:
                nums1[insert]=nums2[n]
                n-=1
            insert-=1
        while n>=0:
            nums1[insert]=nums2[n]
            n-=1
            insert-=1
            
```


