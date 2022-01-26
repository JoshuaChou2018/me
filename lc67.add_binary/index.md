# lc67. Add Binary


Given two binary strings `a` and `b`, return *their sum as a binary string*.

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"
```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"
```

**Constraints:**

- `1 <= a.length, b.length <= 104`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

###### 解题思路

直接按照进位处理即可。

**朴素解法**

```python
class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        _up=0
        ans=[]
        a,b=list(a),list(b)
        while len(a)!=0 and len(b)!=0:
            _a=int(a.pop(-1))
            _b=int(b.pop(-1))
            _sum=_a+_b+_up
            if _sum>=2:
                ans.append(_sum%2)
                _up=1
            else:
                ans.append(_sum)
                _up=0
        if len(a)!=0:
            while len(a)!=0:
                _a=int(a.pop(-1))
                _sum=_a+_up
                if _sum>=2:
                    ans.append(_sum%2)
                    _up=1
                else:
                    ans.append(_sum)
                    _up=0
        elif len(b)!=0:
            while len(b)!=0:
                _b=int(b.pop(-1))
                _sum=_b+_up
                if _sum>=2:
                    ans.append(_sum%2)
                    _up=1
                else:
                    ans.append(_sum)
                    _up=0
        if _up!=0:
            ans.append(_up)
        return ''.join([str(x) for x in ans[::-1]])
```

**性能分析**：

Runtime: 32 ms, faster than 40.49% of Python online submissions for Add Binary.

Memory Usage: 13.7 MB, less than 6.13% of Python online submissions for Add Binary.

**调包解法**：

直接把二进制转为10进制求和再转回二进制

```python
res = int(a, 2) + int(b, 2)
res_str = str(bin(res))
res_len = len(res_str) 
return res_str[2:res_len]
```


