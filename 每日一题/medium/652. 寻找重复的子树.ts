// 二叉树序列化，哈希映射：只存储序列到头节点的映射
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const seen = new Map()
  const repeat: Set<TreeNode> = new Set()
  const dfs = (node: TreeNode) => {
    if (!node) return ''
    let sb = ''
    sb = `${node.val}(${dfs(node.left)})(${dfs(node.right)})`
    if (seen.has(sb)) {
      repeat.add(seen.get(sb))
    } else {
      seen.set(sb, node)
    }
    return sb
  }
  dfs(root)
  return [...repeat]
}
