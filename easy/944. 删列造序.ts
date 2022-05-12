function minDeletionSize(strs: string[]): number {
  let ans = 0
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] > strs[j + 1][i]) {
        ans++
        break
      }
    }
  }
  return ans
}
