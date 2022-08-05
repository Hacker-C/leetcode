function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
  const dfs = (node: TreeNode, val: number, curDepth: number) => {
    if (!node) return
    if (curDepth === depth - 1) {
      const [l, r] = [node.left, node.right]
      node.left = new TreeNode(val, l, null)
      node.right = new TreeNode(val, null, r)
    }
    dfs(node.left, val, curDepth + 1)
    dfs(node.right, val, curDepth + 1)
  }
  if (depth === 1) {
    return new TreeNode(val, root, null)
  }
  dfs(root, val, 1)
  return root
}
