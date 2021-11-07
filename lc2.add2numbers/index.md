# lc2.Add Two Numbers


You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![addtwonumber1](lc2.add2numbers.en.assets/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

**Example 2:**

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

**Example 3:**

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

 

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

#### Thinking

To understand the question, we need to specify:

2->4->3 stands for the number 342

5->6->4 stands for the number 465

So, the sum should be 807, which can be represented as 7->0->8

Then the process goes easily.

Firstly we add 2 and 5, which is the first element of both lists, if the sum is smaller than 10, then we simply output the sum to the corresponding element in the output list. Let’s say 2+5->7.

If sum is >=10, we leave the mode to the corresponding position in the output list and add 1 to the follow position as we know the sum <=19 (9+9+?1), here ?1 depends on whether there is a 1 from the previous position.

#### Solution

```python
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        _add2next=0
        initialNode=ListNode()
        currentNode=initialNode
        while True:
            try:
                _l1=l1.val
            except:
                _l1=0
            try:
                _l2=l2.val
            except:
                _l2=0
            _sum=_l1+_l2+_add2next
            currentNode.val=_sum%10
            _add2next=_sum//10
            try:
                l1=l1.next
            except:
                l1=None
            try:
                l2=l2.next
            except:
                l2=None
            if l1==l2==None and _add2next==0:
                break
            elif l1==l2==None and _add2next==1:
                currentNode.next=ListNode(val=1)
                break
            else:
                nextNode=ListNode()
                currentNode.next=nextNode
                currentNode=nextNode
        return initialNode
```

**Runtime: 68ms**

**Memory: 14.4MB**

