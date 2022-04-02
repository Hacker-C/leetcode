/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1
  if (needle.length === 0) return 0
  for (let i = 0; i < haystack.length; i++) {
    let flag = true
    let k = 0
    for (let j = i; j < i + needle.length; j++) {
      if (haystack[j] !== needle[k++]) {
        flag = false
        break
      }
    }
    if (flag) return i
  }
  return -1
}
