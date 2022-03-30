/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法2：摩尔投票法
// 两军对线，超过一半的元素为一个阵营，另外其他为一个阵营
// 规则：两边阵营，一对一，两个都阵亡
// 结局：那么最后剩下的肯定是超过一半的那个数
// 模拟：使用一个 votes 变量来模拟,votes为 0 说明两军消耗完毕，此时下一个元素为胜者
var majorityElement = function (nums) {
  let votes = 0
  let ans = nums[0]
  for (let i = 0, len = nums.length; i < len; i++) {
    // 当 votes === 0，说明前面的消除完了，那么此时暂时认为是答案
    if (votes === 0) ans = nums[i]
    // 相同的是同一个阵营的，votes自增
    if (ans === nums[i]) votes++
    // 不同的是敌人，votes自减
    else votes--
  }
  return ans
}

majorityElement([1, 2, 3, 4, 5, 5, 5, 5, 5])

// 解法1：哈希大法
var majorityElement = function (nums) {
  let map = new Map()
  for (let e of nums) {
    if (map.has(e)) {
      map.set(e, map.get(e) + 1)
    } else {
      map.set(e, 1)
    }
  }
  for (let [k, v] of map) {
    if (v > nums.length >> 1) {
      return k
    }
  }
}
