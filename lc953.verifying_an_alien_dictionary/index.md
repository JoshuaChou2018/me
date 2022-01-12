# lc953. Verifying an Alien Dictionary


In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different `order`. The `order` of the alphabet is some permutation of lowercase letters.

Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographically in this alien language.

**Example 1:**

```
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
```

**Example 2:**

```
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
```

**Example 3:**

```
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
```

 

**Constraints:**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `order.length == 26`
- All characters in `words[i]` and `order` are English lowercase letters.

###### 解题思路：

对于每一个单词的每一个字母我们都可以用其在字典中的位置来编码，比如说：

hello=[0,6,1,1,14]，对于字典order = "hlabcdefgijkmnopqrstuvwxyz”

给定一组词汇如：words = ["hello","leetcode"]

我们可以把其中的单词全部翻译成index，然后依次比较。

###### 代码：

```python
class Solution(object):
    def isAlienSorted(self, words, order):
        """
        :type words: List[str]
        :type order: str
        :rtype: bool
        """
        def word2idx(word,order):
            out=[]
            for _ in word:
                out.append(order.index(_))
            return out

        A_idx=None # to record the left one
        B_idx=None # to record the right one

        for i in range(len(words)-1):
            A_idx=word2idx(words[i],order)
            B_idx=word2idx(words[i+1],order)
            flag=True
            while len(A_idx)!=0 and len(B_idx)!=0 and flag==True:
                A=A_idx[0]
                A_idx=A_idx[1:]
                B=B_idx[0]
                B_idx=B_idx[1:]
                if A<B:
                    flag=False
                elif A>B:
                    return False
                elif A==B:
                    pass
            if flag==True:
                if len(A_idx)!=0:
                    return False
                else:
                    pass
        return True
            

```

###### 性能：

执行用时：20 ms, 在所有 Python 提交中击败了69.01%的用户

内存消耗：13 MB, 在所有 Python 提交中击败了87.32%的用户

###### 优化：

原始代码中定义了一些不必要的操作步骤，导致拉满速度和时间，以下代码采用了一样的思路，但运行速度更快：

```python
class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        di = dict()
		# storing the alphabet order of language via hashmap
        for i in range(len(order)):
            di[order[i]] = i+1
        
		# helper function comparing two words
        def compareWords(w1, w2):
            i = 0
			# looping depends on smaller word
            while i<min(len(w1), len(w2)): 
				# getting order/rank of words
                rank1, rank2 = di.get(w1[i]), di.get(w2[i])
                # correct order if w2's rank is greater
				if rank1 < rank2:
                    return True
				# continue if letters are same
                elif rank1 == rank2: 
                    i += 1
                    continue
                # incorrect order if w1's rank is greater
				else:
                    return False 
            # w1 should be smaller if all letters are equal
			if len(w1)>len(w2):
                return False
            else:
                return True
        
        for i in range(len(words)-1):
            w1, w2 = words[i], words[i+1]
			# comparing with the immediate next word
            if not compareWords(w1, w2):
                return False
        return True
```


