function pruneTree(root: TreeNode | null): TreeNode | null {
  const dfs = (node: TreeNode): TreeNode => {
    if (node.left) node.left = dfs(node.left)
    if (node.right) node.right = dfs(node.right)
    if (!node.left && !node.right && node.val === 0) return null
    return node
  }
  return dfs(root)
}
