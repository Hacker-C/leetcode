function orderlyQueue(s: string, k: number): string {
  if (k > 1) {
    return s.split('').sort().join('')
  }
  let ans = s
  let temp = s
  for (let i = 0; i < s.length; i++) {
    temp = temp.slice(1) + temp.slice(0, 1)
    if (temp < ans) {
      ans = temp
    }
  }
  return ans
}

console.log(orderlyQueue('kuh', 1))
