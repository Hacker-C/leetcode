/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {

  if (!root) {
    return false
  }
  const map = new Map()
  const helper = (node, k, map) => {
    if (!node) {
      return false
    }
    let sub = k - node.val
    if (map.has(sub)) {
      return true
    } else {
      map.set(node.val, node.val)
    }
    return helper(node.left, k, map) || helper(node.right, k, map)
  }
  return helper(root, k, map)

};