function maximumWealth(accounts: number[][]): number {
  let ans: number = -Infinity
  for (let i = 0; i < accounts.length; i++) {
    let sum: number = 0
    for (let j = 0; j < accounts[0].length; j++) {
      sum += accounts[i][j]
    }
    if (sum > ans) ans = sum
  }
  return ans
}
