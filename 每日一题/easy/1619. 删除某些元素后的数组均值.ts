function trimMean(arr: number[]): number {
  let n = 0.05 * arr.length
  arr.sort((a, b)=> a - b)
  let nums =  arr.slice(n, arr.length - n)
  let res = nums.reduce((a, b)=>a+b) / (arr.length - 2 * n)
  return res
}
