// 本体利用满二叉树的编号性质
// 满二叉树的左子树编号是 2 * n，右子树的编号是 2 * n + 1，同层节点编号之差可以计算出两节点之间的宽度。TS 使用 bigint 防止编号溢出。

function widthOfBinaryTree(root: TreeNode | null): number {
  const queue: { code: bigint; node: TreeNode }[] = [{ code: 1n, node: root }]
  let maxLength: bigint = 0n
  while (queue.length) {
    let size = queue.length
    const temp: bigint[] = []
    while (size--) {
      const myNode = queue.shift()
      temp.push(myNode.code)
      const { code, node } = myNode
      node.left && queue.push({ code: code * 2n, node: node.left })
      node.right && queue.push({ code: code * 2n + 1n, node: node.right })
    }
    let res = temp[temp.length - 1] - temp[0]
    maxLength = res > maxLength ? res : maxLength
  }
  return Number(maxLength + 1n)
}
