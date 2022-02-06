# lc10. Regular Expression Matching


Given an input string `s` and a pattern `p`, implement regular expression matching with support for `'.'` and `'*'` where:

- `'.'` Matches any single character.
- `'*'` Matches zero or more of the preceding element.

The matching should cover the **entire** input string (not partial).

 

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

 

**Constraints:**

- `1 <= s.length <= 20`
- `1 <= p.length <= 30`
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters, `'.'`, and `'*'`.
- It is guaranteed for each appearance of the character `'*'`, there will be a previous valid character to match.

###### 解题思路

手写最简单的正则表达式函数，判断s是否符合p的正则规则。

**初始思路**

用两个指针分别读取s和p的头，按照规则依次匹配。确保两个指针可以在满足规则的前提下都移动到s和p的尾端。

**进阶思路**

动态规划。类似于两个序列做比对，只要可以完全alignment上就OK。

![16155](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/16155.9GLp0j.png)

```python
class Solution:
    def isMatch(self, s, p):
        m = len(s) + 1
        n = len(p) + 1
        dp = [[False for _ in range(n)] for _ in range(m)]
        dp[0][0] = True
        for j in range(2, n):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j - 2]
        for r in range(1, m):
            i = r - 1 
            for c in range(1, n):
                j = c - 1 
                if s[i] == p[j] or p[j] == '.':
                    dp[r][c] = dp[r - 1][c - 1]
                elif p[j] == '*':
                    if p[j - 1] == s[i] or p[j - 1] == '.':
                        dp[r][c] = dp[r - 1][c] or dp[r][c - 2]
                    else:
                        dp[r][c] = dp[r][c - 2]
                else:
                    dp[r][c] = False
        return dp[m - 1][n - 1]
```




