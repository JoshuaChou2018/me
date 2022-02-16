# lc15. 3Sum


Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

 

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

**Example 2:**

```
Input: nums = []
Output: []
```

**Example 3:**

```
Input: nums = [0]
Output: []
```

 

**Constraints:**

- `0 <= nums.length <= 3000`
- `-105 <= nums[i] <= 105`

###### 解题思路

![image-20220214155558107](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/image-20220214155558107.7qgCYT.png)

![Video_2019-06-19_192352.gif](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/2124b524439bcf0eb159ba43be4420c76f60ff2b3b51f87de269c001a323ea1a-Video_2019-06-19_192352.zaEi8Q.gif)

```python
class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums=sorted(nums)
        ans=set()
        i=0
        total_len=len(nums)
        while i<=total_len-3:
            if nums[i]>0:
                break
            val=nums[i]
            head=i+1
            tail=total_len-1
            while head<tail:
                _sum=val+nums[head]+nums[tail]
                if _sum==0:
                    ans.add((val,nums[head],nums[tail]))
                    head+=1
                    tail-=1
                elif _sum<0:
                    head+=1
                elif _sum>0:
                    tail-=1
            i+=1
        return [list(x) for x in ans]



```


