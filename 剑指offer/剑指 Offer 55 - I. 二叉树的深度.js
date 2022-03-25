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
  // 广度优先
  if (!root) return 0
  const q = [root]
  let ans = 0
  while (q.length) {
    let curLen = q.length
    ans++
    while (curLen--) {
      let node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
  }
  return ans
}
