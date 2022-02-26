/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0
  }
  if (needle.length > haystack.length) {
    return -1
  }
  let len = needle.length
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + len) === needle) {
      return i
    }
  }
  return -1
};
