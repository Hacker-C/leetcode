function numPrimeArrangements(n: number): number {
  const isPrime = (x: number): boolean => {
    if (x <= 1) return false
    for (let i = 2; i <= ~~Math.sqrt(x); i++) {
      if (x % i === 0) return false
    }
    return true
  }
  let [count1, count2] = [0, 0]
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count1++
    else count2++
  }
  let res = 1
  for (let i = 1; i <= count1; i++) {
    res = (res * i) % (1e9 + 7)
  }
  for (let i = 1; i <= count2; i++) {
    res = (res * i) % (1e9 + 7)
  }
  return res
}

let res = numPrimeArrangements(100)
console.log(res)
