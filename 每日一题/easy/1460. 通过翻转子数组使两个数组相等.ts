// 法1：排序比较
function canBeEqual1(target: number[], arr: number[]): boolean {
  return arr.sort().toString() === target.sort().toString()
}

// 法2：统计元素数目
function canBeEqual(target: number[], arr: number[]): boolean {
  const map = new Map()
  for (let n of target) {
    map.set(n, (map.get(n) ?? 0) + 1)
  }
  for (let n of arr) {
    map.set(n, (map.get(n) ?? 0) - 1)
    if (map.get(n) < 0) return false // 统计过程中一旦遇到小于 0 的直接返回 false
  }
  return true
}
