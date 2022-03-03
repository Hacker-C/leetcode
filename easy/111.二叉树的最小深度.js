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
 * @return {number}
 */
var minDepth = function (root) {

  if (root === null) return 0
  if (!root.left && !root.right) return 1
  let v1 = minDepth(root.left)
  let v2 = minDepth(root.right)
  if (!root.left || !root.right) return v1 + v2 + 1
  return Math.min(v1, v2) + 1

};