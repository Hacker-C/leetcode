/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// # 方法1：以排序字符串为键
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    let temp = str.split('').sort().join('')
    if (!map.has(temp)) {
      // 没有异构词
      map.set(temp, [str])
    } else {
      // 存在异构词
      map.set(temp, [...map.get(temp), str])
    }
  }
  const res = []
  map.forEach((value) => {
    res.push(value)
  })
  return res
}

// # 方法2：每个字母作为质数，质数相乘作为键，这样同类异构词肯定不会重复

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
