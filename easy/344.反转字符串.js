/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let l = 0, r = s.length
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]]
    l++
    r--
  }
};

// 方法一：双指针
// 方法二：一次遍历