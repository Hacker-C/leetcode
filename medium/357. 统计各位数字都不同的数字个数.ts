function countNumbersWithUniqueDigits(n: number): number {
  let ans: number = 10
  for (let i: number = 2, last = 9; i <= n; i++) {
    let cur: number = last * (10 - i + 1)
    ans += cur
    last = cur
  }
  return ans
}
console.log(countNumbersWithUniqueDigits(2))
