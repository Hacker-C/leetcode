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

function largestValues(root: TreeNode | null): number[] {
  if (!root) return []
  const q: TreeNode[] = [root]
  const ans: number[] = []
  while (q.length) {
    let len = q.length
    let max: number = Math.max()
    while (len--) {
      let node = q.shift()
      max = Math.max(max, node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    ans.push(max)
  }
  return ans
}
