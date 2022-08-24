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

function preorderTraversal(root: TreeNode | null): number[] {
  const help = (node: TreeNode, ans: number[] = []): number[] => {
    if (node) {
      ans.push(node.val)
      help(node.left, ans)
      help(node.right, ans)
    }
    return ans
  }
  return help(root)
}
