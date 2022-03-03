/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 找规律

  return num > 0 && num % 9 === 0 ? 9 : num % 9

  // 循环解
  // const numToArray = (n) => n.toString().split('').map(Number)
  // let arr = numToArray(num)
  // let sum = arr.reduce((pre, cur) => pre + cur, 0)
  // while (sum >= 10) {
  //   arr = numToArray(sum)
  //   sum = arr.reduce((pre, cur) => pre + cur, 0)
  // }
  // return sum
};
