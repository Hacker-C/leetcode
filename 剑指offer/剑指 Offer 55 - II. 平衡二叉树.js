/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 计算当前节点的深度
  const getDepth = (node) => {
    if (!node) return 0
    let q = [node]
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
  // 递归判断正负
  if (!root) return true
  return (
    Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}
