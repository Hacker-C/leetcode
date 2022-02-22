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
var preorderTraversal = function (root) {
  let res = []
  const sub = (node, ans = []) => {
    if (node !== null) {
      ans.push(node.val)
      sub(node.left, ans)
      sub(node.right, ans)
    }
    return ans
  }
  res = sub(root)
  return res
};