/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let arr = s.split('')
  const letter = (c) => /^[a-zA-Z]$/.test(c)
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  let i = 0, j = arr.length - 1
  while (i < j) {
    if (letter(arr[i])) {
      if (letter(arr[j])) {
        swap(arr, i, j)
        i++
        j--
      } else {
        j--
      }
    } else {
      i++
    }
  }
  return arr.join('')
};


