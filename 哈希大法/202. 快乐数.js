/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 出现重复序列循环，也就是出现重复数字，就不是快乐数
  // 出现1，则为快乐数
  // 用一个哈希表（HashsSet）记录是否出现重复数字，若出现说明出现无限循环
  const set = new Set()
  while (true) {
    let sum = 0
    while (n) {
      sum += (n % 10) ** 2
      n = Math.floor(n / 10)
    }
    if (sum === 1) return true
    if (set.has(sum)) return false
    set.add(sum)
    n = sum
  }
}
