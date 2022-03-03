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
    return new TreeNode(val)
  }
  let pos = root
  while (pos !== null) {
    if (val < pos.val) {
      if (pos.left === null) {
        pos.left = new TreeNode(val)
        break
      } else {
        pos = pos.left
      }
    } else {
      if (pos.right === null) {
        pos.right = new TreeNode(val)
        break
      } else {
        pos = pos.right
      }
    }
  }
  return root
};