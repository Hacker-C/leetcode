/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  //哪个小拼接哪个，从而保证两者长度相同
  if (num1.length > num2.length) [num1, num2] = [num2, num1]
  let m = num2.length - num1.length
  for (let i = 0; i < m; i++) {
    num1 = '0' + num1
  }
  let ans = '' // 记录相加结果
  let carry = 0 // 代表进位，初始值 0
  // 从后往前遍历，低位到高位，逢 10 进 1
  for (let i = num2.length - 1; i >= 0; i--) {
    // 总和：没算进位的两字符串对应位置数字与进位相加后的和
    // 这里的 + 是正，字符转数字，作用同 Number()
    let total = carry + +num1[i] + +num2[i]
    // 本位 = 总和 % 10
    ans = (total % 10) + ans
    // 进位 = (总和 / 10) 向下取整，参与下一次运算
    carry = (total / 10) >>> 0
  }
  // 判断最高位是否有进位，有进位则在前面加进位
  if (carry >= 1) {
    ans = carry + ans
  }
  return ans
}
