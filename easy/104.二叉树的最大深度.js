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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  const q = [], res = [], k = 0
  q.push(root)
  res.push(k)
  while (q.length) {
    const curLength = q.length
    for (let i = 0; i < curLength; i++) {
      const node = q.shift()
      res.push(k)
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    k++
  }
  return Math.max.apply(null, res) + 1
};