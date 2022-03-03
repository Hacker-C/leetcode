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
var isSymmetric = function (root) {

  const check = (l, r) => {
    if (!l && !r) {
      return true
    }
    if (!l || !r) {
      return false
    }
    return l.val === r.val && check(l.left, r.right) && check(l.right, r.left)
  }

  return check(root, root)

};