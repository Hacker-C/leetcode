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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const traversal = (node, ans = []) => {
    if (node !== null) {
      traversal(node.left, ans)
      traversal(node.right, ans)
      ans.push(node.val)
    }
    return ans
  }
  let res = traversal(root)
  return res
};