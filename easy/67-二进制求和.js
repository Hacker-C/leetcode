/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let [l1, l2] = [a.split('').map(Number), b.split('').map(Number)]
  let ans = []
  if (a.length < b.length) {
    l1 = Array(b.length - a.length).fill(0).concat(a.split('').map(Number))
  } else {
    l2 = Array(a.length - b.length).fill(0).concat(b.split('').map(Number))
  }
  let next = 0, sum = 0, final = 0
  for (let i = l1.length - 1; i >= 0; i--) {
    sum = l1[i] + l2[i] + next
    next = sum >= 2 ? 1 : 0
    if (sum <= 1) final = sum
    else if (sum === 2) final = 0
    else final = 1
    ans.push(final)
  }
  if (next >= 1) {
    ans.push(1)
  }
  return ans.reverse().join('')
};
