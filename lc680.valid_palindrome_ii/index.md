# lc680. Valid Palindrome II


Given a string `s`, return `true` *if the* `s` *can be palindrome after deleting **at most one** character from it*. 

**Example 1:**

```
Input: s = "aba"
Output: true
```

**Example 2:**

```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
```

**Example 3:**

```
Input: s = "abc"
Output: false
```

 

**Constraints:**

- `1 <= s.length <= 105`
- `s` consists of lowercase English letters.

###### 解题思路：

如果最多删除一个字母可以使字符串满足回文序列即返回true。

我们可以从字符串两端开始依次比较，如果遇到不同，我们有一次机会删除其中一个字母继续比较，一个简单的while循环就可以完成任务。

###### 代码：

```python
class Solution(object):
    def validPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        
        def isPalindrome(_s):
            _left=0
            _right=len(_s)-1
            while _left<_right:
                if _s[_left]!=_s[_right]:
                    return False
                else:
                    _left+=1
                    _right-=1
            return True

        delcount=0
        left=0
        right=len(s)-1
        while left<right:
            if s[left]==s[right]:
                left+=1
                right-=1
            else:
                if delcount==0:
                    delcount+=1
                    if isPalindrome(s[left+1:right+1])==True:
                        left+=1
                    elif isPalindrome(s[left:right])==True:
                        right-=1
                    else:
                        return False
                else:
                    return False
        return True
```

###### 性能：

执行用时：140 ms, 在所有 Python 提交中击败了17.65%的用户

内存消耗：13.6 MB, 在所有 Python 提交中击败了47.06%的用户

