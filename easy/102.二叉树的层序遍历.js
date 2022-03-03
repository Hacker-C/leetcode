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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = []
  if (!root) {
    return ans
  }
  const q = []
  q.push(root)
  while (q.length) {
    const curLength = q.length
    ans.push([])
    for (let i = 0; i < curLength; i++) {
      const node = q.shift()
      ans[ans.length - 1].push(node.val)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
  }
  return ans
};