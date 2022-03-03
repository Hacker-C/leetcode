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
var insertIntoBST = function (root, val) {
  if (root === null) {
    root = new TreeNode(val)
    return root
  }
  const insert = (node, val) => {
    if (val < node.val) {
      if (node.left === null) {
        node.left = new TreeNode(val)
      } else {
        insert(node.left, val)
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(val)
      } else {
        insert(node.right, val)
      }
    }
  }
  insert(root, val)
  return root
};