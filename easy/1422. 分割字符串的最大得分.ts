// 一次遍历
function maxScore(s: string): number {
  let one = 0
  for (let c of s) {
    if (c === '1') one++
  }
  let leftZero = s[0] === '0' ? 1 : 0
  let rightOne = s[0] === '0' ? one : one - 1
  let score = leftZero + rightOne
  let max = score
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      score++
    } else {
      score--
    }
    if (score > max) max = score
  }
  return max
}
