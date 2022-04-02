/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

// 解法1：api 大法
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n)
}

// 解法2：分两部分来加入到新数组中，最后拼凑数组
var reverseLeftWords = function (s, n) {
  const ans = Array(s.length)
  n %= s.length
  let r = s.length - 1
  for (let i = n - 1; i >= 0; i--) {
    ans[r--] = s[i]
  }
  for (let i = s.length - 1; i >= n; i--) {
    ans[r--] = s[i]
  }
  return ans.join('')
}

// 解法3：前 n 个字符逆转，后面 s.length - n 个字符逆转，最后全部逆转
var reverseLeftWords = function (s, n) {
  n = n % s.length
  const _reverse = (arr, l, r) => {
    while (l < r) {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  let arr = s.split('')
  _reverse(arr, 0, n - 1)
  _reverse(arr, n, arr.length - 1)
  _reverse(arr, 0, arr.length - 1)
  return arr.join('')
}
