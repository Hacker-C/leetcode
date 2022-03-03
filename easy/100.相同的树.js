/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {

  const helper = (n1, n2) => {
    // 比较节点是否相同（结构和值）
    if (!n1 && !n2) {
      return true
    }
    if (n1 === null || n2 === null) {
      return false
    }
    if (n1.val !== n2.val) {
      return false
    }
    return helper(n1.left, n2.left) && helper(n1.right, n2.right)
  }

  return helper(p, q)

};