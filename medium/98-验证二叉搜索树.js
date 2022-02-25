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
 * @return {boolean}
 */
var isValidBST = function (root) {

  const rec = (node, lower, higher) => {
    if (!node) {
      return true
    }
    if (node.val <= lower || node.val >= higher) {
      return false
    }
    return rec(node.left, lower, node.val) && rec(node.right, node.val, higher)
  }

  return rec(root, -Infinity, +Infinity)
};