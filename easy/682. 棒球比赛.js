/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = []
  for (let c of ops) {
    let l = res.length
    if (/\d/.test(c)) {
      res.push(+c)
    } else if (c === '+') {
      res.push(res[l - 1] + res[l - 2])
    } else if (c === 'D') {
      res.push(res[l - 1] * 2)
    } else if (c === 'C') {
      res.pop()
    }
  }
  return res.reduce((pre, cur) => pre + cur, 0)
}
