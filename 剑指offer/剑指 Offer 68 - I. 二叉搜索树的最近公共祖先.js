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
  const getNodes = (root, node, res = []) => {
    res.push(root)
    if (root.val < node.val) {
      return getNodes(root.right, node, res)
    }
    if (root.val > node.val) {
      return getNodes(root.left, node, res)
    }
    return res
  }
  let nodes1 = getNodes(root, p)
  let nodes2 = getNodes(root, q)
  if (nodes1.length > nodes2.length) {
    ;[nodes1, nodes2] = [nodes2, nodes1]
  }
  for (let i = nodes1.length01; i >= 0; i--) {
    for (let j = 0; j < nodes2.length; j++) {
      if (nodes1[i].val === nodes2[j].val) {
        return nodes1[i]
      }
    }
  }
}
