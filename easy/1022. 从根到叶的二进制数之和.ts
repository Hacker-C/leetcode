function sumRootToLeaf(root: TreeNode | null): number {
  const sum = (node: TreeNode, ans: number = 0): number => {
    if (!node) {
      return 0
    }
    ans = (ans << 1) + node.val
    if (!node.left && !node.right) {
      return ans
    }
    return sum(node.left, ans) + sum(node.right, ans)
  }
  return sum(root, 0)
}
