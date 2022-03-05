/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // return nums.map(x => x ** 2).sort((a, b) => a - b)
  let nums1 = [], nums2 = []
  nums.forEach((v, i) => {
    if (v < 0) {
      nums1.push(v ** 2)
    } else {
      nums2.push(v ** 2)
    }
  })
  let i = nums1.length - 1, j = 0, ans = []
  while (i >= 0 && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      ans.push(nums1[i--])
    } else {
      ans.push(nums2[j++])
    }
  }
  if (i >= 0) {
    for (let j = i; j >= 0; j--) {
      ans.push(nums1[j])
    }
  }
  for (let i = j; i < nums2.length; i++) {
    ans.push(nums2[i])
  }
  return ans
};

/*
看到题目，首先想到的是先每个数平方，然后再排序：
```js
var sortedSquares = function (nums) {
  return nums.map(x => x ** 2).sort((a, b) => a - b)
}
```
然后看到进阶内容，要求时间复杂度为 `O(n)`，就想到了先将数组分为两组（同时将每个元素平方），然后使用双指针遍历两个有序数组。也不难~
没有使用 `unshift`、`sort` 这种时间复杂度大于等于 `O(n)` 的api方法，保证整体时间复杂度为线性（`O(n)`）。
*/