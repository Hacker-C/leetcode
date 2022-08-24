function deepestLeavesSum(root: TreeNode | null): number {
  const queue: TreeNode[] = [root]
  const res: number[] = []
  while (queue.length) {
    let len = queue.length
    res.length = 0
    while (len--) {
      const node = queue.shift()
      res.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return res.reduce((sum, cur) => sum + cur, 0)
}
