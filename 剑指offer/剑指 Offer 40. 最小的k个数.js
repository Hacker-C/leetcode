/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  // 寻找最大数，以生成计数数组
  let maxValue = -Infinity
  for (let v of arr) {
    if (v > maxValue) maxValue = v
  }
  // 计数数组
  const count = Array(maxValue + 1)
  for (let v of arr) {
    if (count[v]) count[v]++
    else count[v] = 1
  }
  let ans = []
  // 遍历计数数组，同时保证只获取k个数字
  for (let i = 0; i < maxValue + 1 && k; i++) {
    while (count[i] > 0 && k) {
      ans.push(i)
      k--
      count[i]--
    }
  }
  return ans
}

getLeastNumbers([0, 0, 1, 3, 4, 5, 0, 7, 6, 7], 9)
