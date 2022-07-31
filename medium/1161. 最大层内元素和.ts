function maxLevelSum(root: TreeNode | null): number {
  const queue = [root]
  const total = []
  while (queue.length) {
    let len = queue.length
    let tempSum = 0
    while (len--) {
      let node = queue.shift()
      tempSum += node.val
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    total.push(tempSum)
  }
  let max = Math.max()
  let index = -1
  total.forEach((tempSum, i) => {
    if (tempSum > max) {
      max = tempSum
      index = i + 1
    }
  })
  return index
}
