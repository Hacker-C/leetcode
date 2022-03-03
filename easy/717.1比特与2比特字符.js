/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let [i, n] = [0, bits.length]
  while (i < n - 1) {
    if (bits[i] === 1) {
      i += 2
    } else {
      i++
    }
  }
  return i === n - 1
};