# 剑指 Offer 09. 用两个栈实现队列


用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

示例 1：

输入：

```
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

示例 2：

输入：

```
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

提示：

```
1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用

```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



###### 解题思路

输入为两个栈，

第一个栈对应的是操作： ["CQueue","appendTail","deleteHead","deleteHead"]

CQueue表示init一个CQueue object

appendTail表示调用appendTail函数

deleteHead表示调用deleteHead函数

第二个栈对应的是操作的值。

栈（Stack）的特点是先入后出，但是我们需要实现直接操作Head的功能。因此使用两个Stack可以实现列表倒序。

```python
class CQueue:
    def __init__(self):
        self.A, self.B = [], []

    def appendTail(self, value: int) -> None:
        self.A.append(value)

    def deleteHead(self) -> int:
        if self.B: return self.B.pop()
        if not self.A: return -1
        while self.A:
            self.B.append(self.A.pop())
        return self.B.pop()
```



**时间复杂度**： appendTail()为O(1), deleteHead()为O(N)

**空间复杂度**：O(N)

