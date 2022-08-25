// 什么 api 大师
function findClosestElements(arr: number[], k: number, x: number): number[] {
  return arr
    .reduce((pre, cur) => [...pre, [cur, Math.abs(cur - x)]], [])
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map(x => x[0])
    .sort((a, b) => a - b)
}
