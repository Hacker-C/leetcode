/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  let q = [root]
  let depth = 0
  while (q.length) {
    let curLen = q.length
    depth++
    while (curLen--) {
      let node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
  }
  return depth
}
