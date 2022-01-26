# lc560. Subarray Sum Equals K


Given an array of integers `nums` and an integer `k`, return *the total number of continuous subarrays whose sum equals to `k`*.

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

**Constraints:**

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`

###### 解题思路：

**累积和**（使用数组）

首先使用一个cumulative数组，保存nums中从0开始到每个元素的累积求和。

然后，cumulative数组中两两数之间的差，对应nums中这两个位置之间的累积求和。

通过计算两两差之后，我们就可以知道有多少continuous subarrays whose sum equals to `k`

```python
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        cumulative=[0]
        base=0
        for num in nums:
            base+=num
            cumulative.append(base)
        ans=0
        for i in range(len(cumulative)-1):
            for j in range(i+1,len(cumulative)):
                res=cumulative[j]-cumulative[i]
                if res==k:
                    ans+=1
        return ans
```



这个方法因为我们需要在cumulative上进行两次循环，所以时间复杂度为O(N^2)，同时因为需要cumulative来存储，所以空间复杂度是O(N).

**累积和**（不使用数组）

```python
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        ans=0
        for i in range(len(nums)-1):
            sum=0
            for j in range(i,len(nums)):
                sum+=nums[j]
                if sum==k:
                    ans+=1
        return ans
```

这个方法因为我们依旧需要在cumulative上进行两次循环，所以时间复杂度为O(N^2)，但是我们不需要使用数组来存储答案，所以空间复杂度是O(1).

**哈希表**

接下来我们希望可以把时间复杂度降到O(N)，所以我们需要抛弃两层循环。这里的思路是，我们只需要遍历nums一遍，然后用一个dict保存出现的和。空间换时间的算法，这题使用哈希表省去的是遍历开头的时间，因为我们已知结尾的话，需要什么开头很容易知道，就是B[j]-k，就是查看之前的前缀和元素里有没有B[j]-k这个元素。与遍历不同的是，遍历寻找开头的话还能知道是哪一段子数组，哈希表的话我们并不知道子数组是哪一段，只需要知道有没有就可以了，这题就是只需要我们给出有没有，有多少个的结果就可以了。

```python
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        _sum, res, cul = 0, 0, {0:1}
        for _ in nums:
            _sum+=_
            if _sum-k in cul:
                res+=cul[_sum-k]
            try:
                cul[_sum]+=1
            except:
                cul[_sum]=1
        return res
```


