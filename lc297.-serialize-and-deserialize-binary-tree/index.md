# lc297. Serialize and Deserialize Binary Tree


Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**Clarification:** The input/output format is the same as [how LeetCode serializes a binary tree](https://leetcode.com/faq/#binary-tree). You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

**Example 1:**

![img](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/serdeser.Rl0s5X.jpg)

```
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
```

**Example 2:**

```
Input: root = []
Output: []
```

 

**Constraints:**

- The number of nodes in the tree is in the range `[0, 104]`.
- `-1000 <= Node.val <= 1000`

###### 解题思路

二叉树的序列化本质上是对其值进行编码，更重要的是对其结构进行编码。可以遍历树来完成上述任务。众所周知，我们一般有两个策略：广度优先搜索和深度优先搜索。

广度优先搜索可以按照层次的顺序从上到下遍历所有的节点
深度优先搜索可以从一个根开始，一直延伸到某个叶，然后回到根，到达另一个分支。根据根节点、左节点和右节点之间的相对顺序，可以进一步将深度优先搜索策略区分为：
  		1. 先序遍历
  		2. 中序遍历
  		3. 后序遍历

如Example 1的树，采用先序遍历我们可以得到字符串: 1, 2, None, None, 3, 4, 5

None表示子节点不存在，因此该字符串就保留了树的结构。

该序列化方法的时间复杂度为O(N)，因为我们只会访问每个节点一次。空间复杂度也为O(N).

反序列化的过程我们先把字符串根据“,”拆分，然后从左往右遍历元素。

序列化函数和反序列化函数都可以用递归思想。

```python
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if root==None:
            return '#,'
        left=self.serialize(root.left)
        right=self.serialize(root.right)
        return str(root.val)+','+left+right
        

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        return self.buildTree(data.split(','))
        
    def buildTree(self,data):
        val=data.pop(0)
        if val=='#':
            return None
        node=TreeNode(val)
        node.left=self.buildTree(data)
        node.right=self.buildTree(data)
        return node

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
```


