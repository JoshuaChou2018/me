# lc253. 会议室 II


给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。

示例 1：

输入：intervals = [[0,30],[5,10],[15,20]]
		输出：2

示例 2：

输入：intervals = [[7,10],[2,4]]
		输出：1


提示：

1 <= intervals.length <= 104
		0 <= starti < endi <= 106

###### 解题思路

我们可以想象把这些interval给叠起来，所需要会议室的最小数量就等于最大重叠的interval的数目。

转化为上下车问题，每个interval的开始时间+1，每个interval的结束时间-1，然后我们统计counter的最大数值。

换个思路就是我们以时间为单位，我们可以知道每个单位时间车上的总人数是增加多少还是减少多少，这样我们可以直接求和从开始扫描到结束，获取当前车上最大的人数就可以。

```python
class Solution(object):
    def minMeetingRooms(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: int
        """
        dic={}
        for interval in intervals:
            try:
                dic[interval[0]]+=1
            except:
                dic[interval[0]]=1
            try:
                dic[interval[1]]-=1
            except:
                dic[interval[1]]=-1
        max_=0
        count=0
        for key in sorted(dic.keys()):
            count+=dic[key]
            if count>max_:
                max_=count
        return max_
```


