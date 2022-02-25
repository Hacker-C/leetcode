/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  const helper = (node, keyNode, ans = []) => {
    if (!node) {
      return null
    }
    ans.push(node)
    if (node.val === keyNode.val) {
      return ans
    }
    if (keyNode.val < node.val) {
      return helper(node.left, keyNode, ans)
    }
    if (keyNode.val > node.val) {
      return helper(node.right, keyNode, ans)
    }
  }

  let n1 = helper(root, p)
  let n2 = helper(root, q)
  let ans = n1[0]
  let m = n1.length < n2.length ? n1.length : n2.length
  for (let i = 0; i < m; i++) {
    if (n1[i].val === n2[i].val) {
      ans = n1[i]
    }
  }
  return ans
};