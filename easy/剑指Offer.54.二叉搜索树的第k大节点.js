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
  const helper = (node, ans = []) => {
    if (node) {
      helper(node.right, ans)
      ans.push(node.val)
      helper(node.left, ans)
    }
    return ans
  }
  let res = helper(root)
  return res[k - 1]
};