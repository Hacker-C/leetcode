function defangIPaddr(address: string): string {
  // 解法1：replace
  // return address.replace(/./g, '[.]')
  // 解法2
  // return address.split('').reduce((pre, cur) => (cur === '.' ? pre + '[.]' : pre + cur), '')
  // 解法3
  let res = ''
  for (const c of address) {
    if (c === '.') {
      res += '[.]'
    } else {
      res += c
    }
  }
  return res
}
