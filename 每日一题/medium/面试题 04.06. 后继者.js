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
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  const midOrder = (node, ans = []) => {
    if (node) {
      midOrder(node.left, ans)
      ans.push(node)
      midOrder(node.right, ans)
    }
    return ans
  }
  let nodes = midOrder(root)
  var bSearch = function (nodes, target) {
    let [low, high] = [0, nodes.length - 1]
    while (low <= high) {
      let mid = (low + high) >> 1
      if (nodes[mid].val === target) {
        return mid
      }
      if (nodes[mid].val < target) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    return low
  }
  let i = bSearch(nodes, p)
  if (i >= nodes.length) return null
  return nodes[i + 1]
}
