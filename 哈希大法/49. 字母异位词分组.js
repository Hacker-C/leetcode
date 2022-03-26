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
var groupAnagrams = function (strs) {
  const t = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101
  ]
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const getN = new Map()
  // ...
}

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
