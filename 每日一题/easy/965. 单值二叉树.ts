/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isUnivalTree(root: TreeNode | null): boolean {
  const target = root.val
  const help = (node: TreeNode, target: number): boolean => {
    if (node) {
      if (node.val !== target) {
        return true
      }
      return help(node.left, target) || help(node.right, target)
    }
  }
  return help(root, target)
}
