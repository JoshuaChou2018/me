# lc973. K Closest Points to Origin


Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

The distance between two points on the **X-Y** plane is the Euclidean distance (i.e., `√(x1 - x2)2 + (y1 - y2)2`).

You may return the answer in **any order**. The answer is **guaranteed** to be **unique**(except for the order that it is in). 

**Example 1:**

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/closestplane1.85NQKA.jpg)

```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
```

**Example 2:**

```
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.
```

**Constraints:**

- `1 <= k <= points.length <= 104`
- `-104 < xi, yi < 104`

###### 解题思路：

最直接的解法就是把每个点的距离计算出来之后，然后根据大小排序取前k。

难点：如何在排序算法中采用最快的方式。

可以考虑使用快速排序方法：

```python
class Solution(object):
    def kClosest(self, points, k):
        """
        :type points: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """

        def calDist(points):
            return [(x,x[0]*x[0]+x[1]*x[1]) for x in points]

        def quickSort(lists,i,j):
            if i >= j:
                return list
            pivot = lists[i]
            low = i
            high = j
            while i < j:
                while i < j and lists[j][1] >= pivot[1]:
                    j -= 1
                lists[i]=lists[j]
                while i < j and lists[i][1] <=pivot[1]:
                    i += 1
                lists[j]=lists[i]
            lists[j] = pivot
            quickSort(lists,low,i-1)
            quickSort(lists,i+1,high)
            return lists
        
        _points=calDist(points)
        _points=quickSort(_points,0,len(_points)-1)
        return [_points[idx][0] for idx in range(k)]
```

但是快速排序性能不稳定，性能取决于pivot的选择。因为这个题有限制条件为topK，所以我们可以进一步考虑使用堆排序，通过维护一个大小为K的堆来遍历数据。

这里为了简化代码，我们调用python自带的heapq模块。由于heapq模块默认的保留K最大，所以为了获得k距离最近的点，我们需要把距离取负值。

```python
import heapq

class Solution(object):
    def kClosest(self, points, k):
        """
        :type points: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """

        def dist(point):
            return (-(point[0]**2+point[1]**2),point)

        h=[]
        for point in points:
            if len(h)<k:
                heapq.heappush(h,dist(point))
            else:
                _new=dist(point)
                if h[0][0]<_new[0]:
                    heapq.heappop(h)
                    heapq.heappush(h,_new)
        
        return [x[1] for x in h]
```

执行用时：148 ms, 在所有 Python 提交中击败了37.37%的用户

内存消耗：18.1 MB, 在所有 Python 提交中击败了53.54%的用户

使用堆在性能上显著优于使用快排。

