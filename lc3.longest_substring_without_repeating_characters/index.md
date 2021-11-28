# lc3.Longest Substring Without Repeating Characters


Given a string `s`, find the length of the **longest substring** without repeating characters.

 

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Example 4:**

```
Input: s = ""
Output: 0
```

 

**Constraints:**

- `0 <= s.length <= 5 * 104`
- `s` consists of English letters, digits, symbols and spaces.



##### Thinking

The simplest method to do is the brute force searching. Given a substring, we check whether it contains repeated characters. Then for all substrings of a given string, we do such a test and the total number of substrings of a given string with length $n$ is $n*(n+1)/2$.

For example, For each substring str[i, j] i.e. starting from index i and ending at index j, we use a function **areUnique(str, i, j)** to check if all the characters in the substring are unique or not. It will return true if all the characters are unique, otherwise false.

The time complexity of **areUnque(str,i,j)** is $O(j-i+1)$.

So the overall time compelxity is $n*(n+1)/2*O(j-i+1)=O(n^2)*O(j-i+1)$. In the worst-case, $O(j-i+1)=O(n)$, so the worst-case overall time complexity is $O(n^3)$.

We are using few extra variables and a constant size set visited[]. So space complexity = O(1).

To optimize, here is an optimization insight: 

In the brute force idea, we repeatedly check a substring starting from the character str[i] to see if it has a duplicate character or not. We can optimize it further because, during the loop, if a substring **str[i, j-1]** is already checked to have no duplicate characters, then for the substring **str[i, j],** we only need to check if **str[j]** is already present in the substring **str[i, j-1]** or not.

Partially cited from:  https://www.enjoyalgorithms.com/blog/longest-substring-without-repeating-characters

