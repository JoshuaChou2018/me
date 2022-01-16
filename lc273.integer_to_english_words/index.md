# lc273. Integer to English Words


Convert a non-negative integer `num` to its English words representation.

**Example 1:**

```
Input: num = 123
Output: "One Hundred Twenty Three"
```

**Example 2:**

```
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
```

**Example 3:**

```
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```

 

**Constraints:**

- `0 <= num <= 2^31 - 1`

###### 解题思路：

根据数字长度分成不同的翻译位:

亿，百万，千，百，Billion, Million, Thousand, Hundred

90-20的整10读法: Ninety, Eighty, Seventy, Sixty, Fifty, Fourty, Thirty, Twenty

19-11的读法：Nienteen, Eighteen, Seventeen, Sixteen, Fifteen, Fourteen, Thirteen, Twelve, Eleven

10-0的读法：Ten, Nine, Eight, Seven, Six, Five, Four, Three, Two, One, Zero

**难点**：把数字根据位数拆开。

**两种解法：**递归和迭代。

###### 递归解法：


