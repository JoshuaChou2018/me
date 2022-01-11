# lc1249. Minimum Remove to Make Valid Parentheses


Given a string s of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting *parentheses string* is valid and return **any** valid string.

Formally, a *parentheses string* is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.

**Example 1:**

```
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
```

**Example 2:**

```
Input: s = "a)b(c)d"
Output: "ab(c)d"
```

**Example 3:**

```
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
```

**Constraints:**

- `1 <= s.length <= 105`
- `s[i]` is either`'('` , `')'`, or lowercase English letter`.`

###### 解题思路：

有效字符串的意味着其中的左括号和右括号一对一匹配的（paired），最终序列中没有多余的括号，所以使用栈或者计数器来统计括号出现是比较好的解法。

题中的Minimum remove非常的让人困惑怀疑题目是否存在某些边界条件，比如说字符串存在多种remove方式都可以获得有效字符串（不考虑同时remove paired括号），其中有一种需要移除的括号数目是最少的。仔细思考后会发现这种情况是不存在的，字符串可能存在多种移除方式，但是这些移除方式所移除的数目都是相同的。

```python
class Solution:
    def minRemoveToMakeValid(self, s):
        left, right, output = 0, s.count(')'),''
        for _chr in s:
            if _chr=='(':
                if right>0: # 有效左括号
                    left+=1
                    right-=1
                    output+=_chr
            elif _chr==')':
                if left==0: # 无效右括号
                    right-=1
                else:
                    left-=1
                    output+=_chr
            else: # 非括号字符
                output+=_chr
        return output
                
```

###### 性能：

执行用时：1456 ms, 在所有 Python 提交中击败了29.47%的用户

内存消耗：14.8 MB, 在所有 Python 提交中击败了94.74%的用户

