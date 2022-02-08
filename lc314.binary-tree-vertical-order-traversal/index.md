# lc314. Binary Tree Vertical Order Traversal


Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

If two nodes are in the same row and column, the order should be from left to right.

**Example 1:**

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/vtree1.iiO12U.QkFbUS.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
```

**Example 2:**

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/vtree2-1.z96seX.jpg)

```
Input: root = [3,9,8,4,0,1,7]
Output: [[4],[9],[3,0,1],[8],[7]]
```

**Example 3:**

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/vtree2.ADmpP4.jpg)

```
Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
Output: [[4],[9,5],[3,0,1],[8,2],[7]]
```


Constraints:

The number of nodes in the tree is in the range [0, 100].
		-100 <= Node.val <= 100

###### 解题思路

![0b05a60ddbd2c91aee2182a48c56ece.jpg](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/1640182693-yuZHZS-0b05a60ddbd2c91aee2182a48c56ece.zrJoYu.jpg)

我们可以在使用BFS遍历的时候给每一个元素带上vertical的位置信息。

1. 使用BFS确保在每个column内的顺序是正确的。
2. 带上vertical信息确保我们知道每一个元素属于哪一列。
3. 使用hashmap来模拟即可。

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def verticalOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if root:
            stack=[[root,0]]
            hashmap={}
            while stack!=[]:
                current_node=stack[0][0]
                current_idx=stack[0][1]
                stack=stack[1:]
                try:
                    hashmap[current_idx].append(current_node)
                except:
                    hashmap[current_idx]=[current_node]
                if current_node.left:
                    stack.append([current_node.left,current_idx-1])
                if current_node.right:
                    stack.append([current_node.right,current_idx+1])
            res=[[node.val for node in hashmap[key]] for key in sorted(hashmap.keys())]
        else:
            res=[]
        return res

```

注意题目有边界条件，如果输入是null需要返回[]。

