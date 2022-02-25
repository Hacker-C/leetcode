/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  // a1b1(实数) + a1b2(虚数) + a2b1(虚数) + a2b2(实数)
  const check = (num) => {
    if (/^-{0,1}\d$/.test(num)) {
      return num + '+0i'
    }
    if (/^-{0,1}\di$/.test(num)) {
      return '0+' + num
    }
    if (num.length === 0) {
      return '0+0i'
    }
    return num
  }
  num1 = check(num1)
  num2 = check(num2)
  let [a1, a2] = num1.split('+')
  let [b1, b2] = num2.split('+')
  a2 = a2.slice(0, a2.length - 1)
  b2 = b2.slice(0, b2.length - 1)
  let a = a1 * b1 - a2 * b2
  let b = a1 * b2 + a2 * b1
  return a + '+' + b + 'i'
};
