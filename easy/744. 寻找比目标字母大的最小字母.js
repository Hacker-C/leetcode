/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let l = 0
  let r = letters.length - 1
  while (l <= r) {
    let mid = (l + r) >> 1
    if (letters[mid] === target) {
      l = mid + 1
    } else if (letters[mid] > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  if (l >= letters.length) return letters[0]
  return letters[l]
}
