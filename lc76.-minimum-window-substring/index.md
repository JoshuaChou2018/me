# lc76. Minimum Window Substring


Given two strings `s` and `t` of lengths `m` and `n` respectively, return *the **minimum window substring** of* `s` *such that every character in* `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

The testcases will be generated such that the answer is **unique**.

A **substring** is a contiguous sequence of characters within the string.

 

**Example 1:**

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
```

**Example 2:**

```
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
```

**Example 3:**

```
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
```

 

**Constraints:**

- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 105`
- `s` and `t` consist of uppercase and lowercase English letters.

##### 解题思路

这道题要求我们返回字符串 s中包含字符串 t 的全部字符的最小窗口，我们利用滑动窗口的思想解决这个问题。因此我们需要两个哈希表，hs哈希表维护的是s字符串中滑动窗口中各个字符出现多少次，ht哈希表维护的是t字符串各个字符出现多少次。如果hs哈希表中包含ht哈希表中的所有字符，并且对应的个数都不小于ht哈希表中各个字符的个数，那么说明当前的窗口是可行的，可行中的长度最短的滑动窗口就是答案。

![image.png](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/1627392480-ABjwBs-image.3mRxFv.png)

过程如下：

1、遍历t字符串，用ht哈希表记录t字符串各个字符出现的次数。

![<img src="力扣500题刷题笔记.assets/image-20210710122600263.png" alt="image-20210710122600263" style="zoom:67%;" />](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/1626094551-vODlam-file_1626094550107.J0quVF.png)

2、定义两个指针j和i，j指针用于收缩窗口，i指针用于延伸窗口，则区间[j,i]表示当前滑动窗口。首先让i和j指针都指向字符串s开头，然后枚举整个字符串s ，枚举过程中，不断增加i使滑动窗口增大，相当于向右扩展滑动窗口。

![<img src="力扣500题刷题笔记.assets/image-20210710121027770.png" alt="image-20210710121027770" style="zoom:67%;" />](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/1626094551-FNKtMc-file_1626094550122.WxE42X.png)

3、每次向右扩展滑动窗口一步，将s[i]加入滑动窗口中，而新加入了s[i]，相当于滑动窗口维护的字符数加一，即hs[s[i]]++。

![<img src="力扣500题刷题笔记.assets/image-20210710122648338.png" alt="image-20210710122648338" style="zoom: 67%;" />](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/1626094551-RbOYEW-file_1626094550125.ZdlAPi.png)

4、对于新加入的字符s[i],如果hs[s[i]] <= ht[s[i]]，说明当前新加入的字符s[i]是必需的，且还未到达字符串t所要求的数量。我们还需要事先定义一个cnt变量， cnt维护的是s字符串[j,i]区间中满足t字符串的元素的个数，记录相对应字符的总数。新加入的字符s[i]必需，则cnt++。

5、我们向右扩展滑动窗口的同时也不能忘记收缩滑动窗口。因此当hs[s[j]] > ht[s[j]时，说明hs哈希表中s[j]的数量多于ht哈希表中s[j]的数量，此时我们就需要向右收缩滑动窗口，j++并使hs[s[j]]--，即hs[s[j ++ ]] --。

6、当cnt == t.size时，说明此时滑动窗口包含符串 t 的全部字符。我们重复上述过程找到最小窗口即为答案。

![image.png](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/1627392545-pNYyEm-image.pFgkQx.png)

时间复杂度分析： 两个指针都严格递增，最多移动 n 次，所以总时间复杂度是 O(n)。

作者：lin-shen-shi-jian-lu-k

链接：https://leetcode-cn.com/problems/minimum-window-substring/solution/leetcode-76-zui-xiao-fu-gai-zi-chuan-cja-lmqz/


##### Answer

```python
from collections import defaultdict

class Solution:
    def minWindow(self, s, t):
        if len(s)<len(t):
            return ""
        hs, ht = defaultdict(int), defaultdict(int)
        for chr in t:
            ht[chr] += 1
        res = "" 
        left, right = 0, 0
        cnt = 0
        while right<len(s):
            hs[s[right]] += 1
            if hs[s[right]] <= ht[s[right]]:
                cnt += 1
            while left<=right and hs[s[left]] > ht[s[left]]:
                hs[s[left]] -= 1
                left += 1
            if cnt == len(t):
                if not res or right-left+1<len(res):
                    res = s[left:right+1]
            right += 1
        return res
```


