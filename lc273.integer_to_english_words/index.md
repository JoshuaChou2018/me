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

```python
class Solution(object):
    def numberToWords(self, num):
        """
        :type num: int
        :rtype: str
        """
        from0to19=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen']
        from20to90=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety']

        def recursive(num):
            if num>=1000000000: # larger than 1 billion
                ans='{}Billion'.format(from0to19[num//1000000000])+recursive(num%1000000000)
                return ans
            elif num>=1000000:
                ans='{}Million'.format(recursive(num//1000000))+recursive(num%1000000)
                return ans
            elif num>=1000:
                ans='{}Thousand'.format(recursive(num//1000))+recursive(num%1000)
                return ans
            elif num>=100:
                ans='{}Hundred'.format(from0to19[num//100])+recursive(num%100)
                return ans
            elif num>=20:
                ans='{}'.format(from20to90[num//10])+recursive(num%10)
                return ans
            else:
                return '{}'.format(from0to19[num])

        def addBlank(s):
            _s=''
            for _ in s:
                if _.isupper():
                    _s+=' {}'.format(_)
                else:
                    _s+=_
            return _s

        if num==0:
            return 'Zero'
        else:
            ans=recursive(num)
            return addBlank(ans)[1:]
```

Runtime: 24 ms, faster than 54.38% of Python online submissions for Integer to English Words.

Memory Usage: 13.6 MB, less than 13.33% of Python online submissions for Integer to English Words.

###### 踩坑：

1. 空格问题
2. 数字区间分割
3. Billion位忘记转英文
3. 英文拼写错误，eg: forteen




