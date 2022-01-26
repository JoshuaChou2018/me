# lc301. Remove Invalid Parentheses


Given a string `s` that contains parentheses and letters, remove the minimum number of invalid parentheses to make the input string valid.

Return *all the possible results*. You may return the answer in **any order**.

**Example 1:**

```
Input: s = "()())()"
Output: ["(())()","()()()"]
```

**Example 2:**

```
Input: s = "(a)())()"
Output: ["(a())()","(a)()()"]
```

**Example 3:**

```
Input: s = ")("
Output: [""]
```

**Constraints:**

- `1 <= s.length <= 25`
- `s` consists of lowercase English letters and parentheses `'('` and `')'`.
- There will be at most `20` parentheses in `s`.

**难点**：本题和[1249. 移除无效的括号](https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/)非常相似，但是这里最难的点是如何找到所有的可能解。

###### 解题思路：

由于我们需要找到的是最小Removal，同时需要找到在当前最小Removal下的所有解，我们可以采用BFS搜索方法。对于BFS的tree中每一层可以认为是在上一层的字符串中删除一个括号之后的所有可能字符串，然后我们对所有节点判断是否为有效括号。使用BFS，有2个好处：

1. 如果父节点已经是合法字符串，则无需再考虑任何子节点。
2. 如果有一个节点已经是合法字符串，则其它所有结果都只可能出现在和这个节点同一层（为了确保minimal removal）。

```python
class Solution(object):
    def removeInvalidParentheses(self, s):
        """
        :type s: str
        :rtype: List[str]
        """

        def delOne(string):
            out=set()
            for i in range(len(string)):
                tmp=list(string)
                tmp.pop(i)
                out.add(''.join(tmp))
            return out

        def getNextLevel(level):
            """
            :type level: set
            """
            nextlevel=set()
            for _ in level:
                for __ in delOne(_):
                    nextlevel.add(__)
            return nextlevel

        def isValid(string):
            count=0
            for _ in string:
                if _=='(':
                    count+=1
                elif _==')':
                    count-=1
                if count<0:
                    return False
            if count==0:
                return True
            else:
                return False

        level=[s]
        length=len(s)
        while True:
            current_ans=[]
            #print(current_ans,level)
            for _ in level:
                if isValid(_)==True:
                    current_ans.append(_)
                else:
                    pass
            if len(current_ans)!=0:
                break
            else:
                if length>1:
                    level=getNextLevel(level)
                    length-=1
                else:
                    current_ans=[""]
                    break
        return current_ans

```

但是使用BFS的时间复杂度比较高，

执行用时：668 ms, 在所有 Python 提交中击败了13.99%的用户

内存消耗：13.9 MB, 在所有 Python 提交中击败了5.12%的用户

