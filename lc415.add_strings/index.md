# lc415. Add Strings


Given two non-negative integers, `num1` and `num2` represented as string, return *the sum of* `num1`*and* `num2` *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as `BigInteger`). You must also not convert the inputs to integers directly.

**Example 1:**

```
Input: num1 = "11", num2 = "123"
Output: "134"
```

**Example 2:**

```
Input: num1 = "456", num2 = "77"
Output: "533"
```

**Example 3:**

```
Input: num1 = "0", num2 = "0"
Output: "0"
```

**Constraints:**

- `1 <= num1.length, num2.length <= 104`
- `num1` and `num2` consist of only digits.
- `num1` and `num2` don't have any leading zeros except for the zero itself.

###### 解题思路：

这道题限制not convert the inputs to integers directly，所以我们只能按照每一步来模拟进位计算。

1. 把两个字符串反向。
2. 把每一位变成数字，模拟进位计算

```python
class Solution(object):
    def addStrings(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        ans=''
        _up=0
        while len(num1)>0 and len(num2)>0:
            _1=int(num1[-1])
            _2=int(num2[-1])
            num1=num1[:-1]
            num2=num2[:-1]
            _sum=_1+_2+_up
            if _sum>9:
                _up=1
            else:
                _up=0
            ans+=str(_sum%10)
        num=''
        if len(num1)>0:
            num=num1
        elif len(num2)>0:
            num=num2
        while len(num)>0:
            _1=int(num[-1])
            num=num[:-1]
            _sum=_1+_up
            if _sum>9:
                _up=1
            else:
                _up=0
            ans+=str(_sum%10)
        if _up==1:
            ans+='1'
        return ans[::-1]
```

注意如果最后_up还是1，那么记得在最终答案上补上1.

执行用时：36 ms, 在所有 Python 提交中击败了41.44%的用户

内存消耗：13.3 MB, 在所有 Python 提交中击败了43.47%的用户

