/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let l = r = sum = 0, len = fruits.length
  let ans = 0, count = {}, c = 0
  while (r < len) {
    if (count[fruits[r]]) {
      count[fruits[r]]++
    } else {
      c++
      count[fruits[r]] = 1
    }
    sum += fruits[r]
    while (c > 2) {
      sum -= fruits[l]
      count[fruits[l]]--
      if (count[fruits[l]] === 0) c--
      l++
    }
    ans = Math.max(ans, r - l + 1)
    r++
  }
  return ans
};

fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
fruits = [1, 2, 3, 2, 2]
totalFruit(fruits)