# lc938. Range Sum of BST


Given the `root` node of a binary search tree and two integers `low` and `high`, return *the sum of values of all nodes with a value in the **inclusive** range* `[low, high]`.



**Example 1:**

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/bst1.mScA0F.jpg)

```
Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
```

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/11/05/bst2.jpg)

```
Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.
```

 

**Constraints:**

- The number of nodes in the tree is in the range `[1, 2 * 104]`.
- `1 <= Node.val <= 105`
- `1 <= low <= high <= 105`
- All `Node.val` are **unique**.

###### 解题思路

因为题中树结构的每个父节点，其左孩子都更小，右孩子都更大，所以直接用树搜索获取所有在区间内的值即可。

**二叉搜索树 BST** 的 value 具有 左值 < 根值 < 右值 的特点。所以我们可以用递归算法累积求和。

```python
class Solution(object):
    def rangeSumBST(self, root, low, high):
        """
        :type root: TreeNode
        :type low: int
        :type high: int
        :rtype: int
        """
        global res
        res = 0
        def traverse(root):
            global res
            if root:
                traverse(root.left)
                if low <= root.val <= high:
                    res += root.val
                traverse(root.right)
        traverse(root)
        return res
```


