# lc125. Valid Palindrome


A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` *if it is a **palindrome**, or* `false` *otherwise*.

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**

- `1 <= s.length <= 2 * 105`
- `s` consists only of printable ASCII characters.

###### 解题思路

1. 把字符串转成小写
2. 首先第一个循环只保留字符串中的字母和数字
3. 利用指针双头判断。

```python
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        valid='abcdefghijklmnopqrstuvwxyz0123456789'
        s=s.lower()
        s=''.join([x for x in s if x in valid])
        while len(s)>1:
            if s[0]!=s[-1]:
                return False
            else:
                s=s[1:-1]
        return True
```

这道题注意一下valid字符串别漏写就行。因为我们只需要遍历一遍字符串，所以时间复杂度为O(N)，同时空间复杂度也为O(N)

