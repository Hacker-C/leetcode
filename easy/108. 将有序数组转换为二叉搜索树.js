/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const transform = (nums, l, r) => {
    if (l > r) return null
    // 根据数组中点构造根节点，
    let mid = (l + r) >> 1
    let root = new TreeNode(nums[mid])
    root.left = transform(nums, l, mid - 1)
    root.right = transform(nums, mid + 1, r)
    return root
  }
  return transform(nums, 0, nums.length - 1)
}
