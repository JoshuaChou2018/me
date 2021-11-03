# i1.What is the most efficient way to sort a million integers?


**Q. What is the most efficient way to sort a million integers?**

**Time Complexity**

| Sorting Algorithm                                            | Average Case | Best Case   | Worst Case  |
| ------------------------------------------------------------ | ------------ | ----------- | ----------- |
| [Bubble Sort](https://coderslegacy.com/python/bubblesort-algorithm/) | O(n^2)       | O(n)        | O(n^2)      |
| [Insertion Sort](https://coderslegacy.com/python/insertion-sort-algorithm/) | O(n^2)       | O(n)        | O(n^2)      |
| [Selection Sort](https://coderslegacy.com/python/selection-sort-algorithm/) | O(n^2)       | O(n^2)      | O(n^2)      |
| [Quick Sort](https://coderslegacy.com/python/quicksort-algorithm/) | O(n.log(n))  | O(n.log(n)) | O(n^2)      |
| [Merge Sort](https://coderslegacy.com/python/merge-sort-algorithm/) | O(n.log(n))  | O(n.log(n)) | O(n.log(n)) |
| [Heap Sort](https://coderslegacy.com/python/heap-sort-algorithm/) | O(n.log(n))  | O(n.log(n)) | O(n.log(n)) |
| [Counting Sort](https://coderslegacy.com/python/counting-sort-algorithm/) | O(n+k)       | O(n+k)      | O(n+k)      |
| [Radix Sort](https://coderslegacy.com/python/radix-sort-algorithm/) | O(n*k)       | O(n*k)      | O(n*k)      |
| [Bucket Sort](https://coderslegacy.com/python/bucket-sort-algorithm/) | O(n+k)       | O(n+k)      | O(n^2)      |

**Space Complexity**

| Sorting Algorithm                                            | Space Complexity |
| ------------------------------------------------------------ | ---------------- |
| [Bubble Sort](https://coderslegacy.com/python/bubblesort-algorithm/) | O(1)             |
| [Insertion Sort](https://coderslegacy.com/python/insertion-sort-algorithm/) | O(1)             |
| [Selection Sort](https://coderslegacy.com/python/selection-sort-algorithm/) | O(1)             |
| [Quick Sort](https://coderslegacy.com/python/quicksort-algorithm/) | O(log(n))        |
| [Merge Sort](https://coderslegacy.com/python/merge-sort-algorithm/) | O(n)             |
| [Heap Sort](https://coderslegacy.com/python/heap-sort-algorithm/) | O(1)             |
| [Counting Sort](https://coderslegacy.com/python/counting-sort-algorithm/) | O(k)             |
| [Radix Sort](https://coderslegacy.com/python/radix-sort-algorithm/) | O(n + k)         |
| [Bucket Sort](https://coderslegacy.com/python/bucket-sort-algorithm/) | O(n)             |

**Stability**

| Sorting Algorithm                                            | Stable Sort? |
| ------------------------------------------------------------ | ------------ |
| [Bubble Sort](https://coderslegacy.com/python/bubblesort-algorithm/) | Yes          |
| [Insertion Sort](https://coderslegacy.com/python/insertion-sort-algorithm/) | Yes          |
| [Selection Sort](https://coderslegacy.com/python/selection-sort-algorithm/) | No           |
| [Quick Sort](https://coderslegacy.com/python/quicksort-algorithm/) | No           |
| [Merge Sort](https://coderslegacy.com/python/merge-sort-algorithm/) | Yes          |
| [Heap Sort](https://coderslegacy.com/python/heap-sort-algorithm/) | No           |
| [Counting Sort](https://coderslegacy.com/python/counting-sort-algorithm/) | Yes          |
| [Radix Sort](https://coderslegacy.com/python/radix-sort-algorithm/) | Yes          |
| [Bucket Sort](https://coderslegacy.com/python/bucket-sort-algorithm/) | Yes          |

Consider above all, merge sort will be the best choice.

