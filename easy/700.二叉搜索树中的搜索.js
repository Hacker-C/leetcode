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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const searchNode = (node, val) => {
    if (!node) {
      return null
    }
    if (val < node.val) {
      return searchNode(node.left, val)
    }
    if (val > node.val) {
      return searchNode(node.right, val)
    }
    if (val === node.val) {
      return node
    }
  }
  return searchNode(root, val)
};