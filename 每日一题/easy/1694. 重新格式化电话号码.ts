function reformatNumber(number: string): string {
  let nums = number.replace(/[- ]/g, '')
  let res = ''
  for (let i=0;i<nums.length;i++) {
    res += nums[i]
    if ((i+1)%3===0) {
      res += '-'
    }
  }
  if (res[res.length - 1] === '-') {
    return res.slice(0, -1)
  }
  if (res[res.length - 2] === '-') {
    return res.slice(0, -3) + '-' + res.slice(-3, -2) + res.slice(-1)
  }
  return res
}

console.log(reformatNumber('1-23-45 6')) // 123-456
console.log(reformatNumber("123 4-567")) // 123-45-67
console.log(reformatNumber("123 4-5678")) // 123-456-78
console.log(reformatNumber("--17-5 229 35-39475 ")) // 175-229-353-94-75
