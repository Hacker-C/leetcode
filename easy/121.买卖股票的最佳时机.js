/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0
  }
  let _min = prices[0], _max = 0
  for (let i = 1; i < prices.length; i++) {
    _min = Math.min(_min, prices[i])
    _max = Math.max(_max, prices[i] - _min)
  }
  return _max
};
