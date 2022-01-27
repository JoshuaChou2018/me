# lc56. Merge Intervals


Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*. 

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

**Constraints:**

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^4`

###### 解题思路

非常简单的思路是我们使用一个辅助list，首先遍历所有的input区间来记录有覆盖的位置，然后我们在遍历辅助list输出最终的interval。但是这种解法需要的内存会非常大，因此空间复杂度高。

另一种思路是先把input的区间按照区间头从小到大排序，然后再依次合并区间。

```python
class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        def partition(lists,low,high):
            i=low-1
            pivot=lists[high][0]
            for j in range(low,high):
                if lists[j][0]<=pivot:
                    i+=1
                    lists[i],lists[j]=lists[j],lists[i]
            lists[i+1],lists[high]=lists[high],lists[i+1]
            return i+1

        def quickSort(lists,low,high):
            if len(lists)==1:
                return lists
            if low<high:
                pi=partition(lists,low,high)
                quickSort(lists,low,pi-1)
                quickSort(lists,pi+1,high)
            return lists

        def overlap(intv1,intv2):
            if intv2[0]<=intv1[1]:
                if intv2[1]<=intv1[1]:
                    return True,intv1
                else:
                    return True,[intv1[0],intv2[1]]
            else:
                return False,[intv1,intv2]

        _intervals=quickSort(intervals,0,len(intervals)-1)
        ans=[]
        tmp=_intervals[0]
        for _ in _intervals:
            isoverlapped,res=overlap(tmp,_)
            if isoverlapped==True:
                tmp=res
            else:
                ans.append(tmp)
                tmp=res[1]
        ans.append(tmp)
        return ans
```




