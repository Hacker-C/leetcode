/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  // 不能用加减乘除，考虑使用位运算
  while (b) {
    // c 为进位，进位需要往前移动一位，也就是左移
    let c = (a & b) << 1
    // a 为没有计算进位的 a 与 b 的二进制和
    a ^= b
    // b 需要参与下一次进位计算和抑或计算，直到b=0
    b = c
  }
  return a
}
