/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const reverse = (arr, l, r) => {
    while (l < r) {
      ;[arr[l], arr[r]] = [arr[r], arr[l]]
      l++
      r--
    }
  }
  let arr = s.split('')
  for (let i = 0; i < s.length; i += 2 * k) {
    let r
    if (s.length - i < k) r = s.length - 1
    else if (s.length - i < 2 * k) r = i + k - 1
    else r = i + k - 1
    reverse(arr, i, r)
  }
  return arr.join('')
}
