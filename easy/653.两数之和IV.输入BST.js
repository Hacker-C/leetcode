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
  const help = (node, k, set = new Set()) => {
    if (node) {
      if (set.has(node.val)) {
        return true
      } else {
        set.add(k - node.val)
      }
      return help(node.left, k, set) || help(node.right, k, set)
    }
    return false
  }
  return help(root, k)
}
