let max = 0

function longestUnivaluePath(root: TreeNode | null): number {
  max = 0
  dfs(root)
  return max
}

function dfs(node: TreeNode | null) {
  if (!node) return 0
  let ans = 0, cur = 0, l = dfs(node.left), r = dfs(node.right)
  if (node.left && node.left.val === node.val) {
    ans += l + 1
    cur += l + 1
  }
  if (node.right && node.right.val === node.val) {
    ans = Math.max(ans, r + 1)
    cur += r +1
  }
  max = Math.max(max, cur)
  return ans
}
