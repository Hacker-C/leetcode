function binaryTreePaths(root: TreeNode | null): string[] {

  const traversal = (cur: TreeNode, path: string, res: string[] = []) => {
    path += cur.val
    if (!cur.left && !cur.right) {
      res.push(path)
      return
    }
    if (cur.left) traversal(cur.left, path + '->', res)
    if (cur.right) traversal(cur.right, path + '->', res)
  }

  if (!root) return []
  let res: string[] = []
  traversal(root, '', res)
  return res
};