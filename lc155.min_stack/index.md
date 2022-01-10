# lc155.Min Stack


Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

###### **Example 1:**

```
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2 
```

###### **Constraints:**

- `-231 <= val <= 231 - 1`
- Methods `pop`, `top` and `getMin`operations will always be called on **non-empty** stacks.
- At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.

###### 解题思路

Stack进行push和pop操作都非常简单，困难的是如何操作getMin。

getMin即拿到stack中所有未出栈数据中的最小值，因此我们在push和pop时可以给每个数据附加上一个属性，即当前的最小值。

**each element is (x,x), the first value if the real value and the second value if the current min value**

有几个注意点：

1. 考虑边界条件，比如说stack中的最后一个数据被pop
2. 每次pop之后需要把当前最小值变为top数据的最小值。

```python
class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.data=[] 
        self.current_min=None
        # each element is (x,x), the first value if the real value and the second value if the current min value


    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        if self.current_min==None:
            self.current_min=x
            self.data.append((x,self.current_min))
        elif x>=self.current_min:
            self.data.append((x,self.current_min))
        elif x<self.current_min:
            self.current_min=x
            self.data.append((x,self.current_min))
        return None

    def pop(self):
        """
        :rtype: None
        """
        self.data.pop(-1)
        if len(self.data)==0:
            self.current_min=None
        else:
            self.current_min=self.data[-1][1]
        return None


    def top(self):
        """
        :rtype: int
        """
        return self.data[-1][0]


    def min(self):
        """
        :rtype: int
        """
        return self.data[-1][1]




# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.min()
```

###### 性能：

执行用时：108 ms, 在所有 Python 提交中击败了85.47%的用户

内存消耗：17 MB, 在所有 Python 提交中击败了5.14%的用户

###### 其它可能解法：

辅助栈

取巧的方法可以直接使用min函数

