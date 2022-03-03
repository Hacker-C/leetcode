/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let sum = 0, next = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    sum = digits[i] + next
    next = sum >= 10 ? 1 : 0
    digits[i] = sum >= 10 ? 0 : sum
    if (next === 0) break
    if (i === 0 && sum >= 10) digits.unshift(1)
  }
  return digits
};
