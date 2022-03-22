/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  // 递归
  const help = (node, res = []) => {
    if (node) {
      help(node.right, res)
      res.push(node.val)
      help(node.left, res)
    }
    return res
  }
  return help(root)[k - 1]
}
