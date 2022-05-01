function getAllElements(
  root1: TreeNode | null,
  root2: TreeNode | null
): number[] {
  const midTraversal = (node: TreeNode, ans: number[] = []) => {
    if (node) {
      midTraversal(node.left, ans)
      ans.push(node.val)
      midTraversal(node.right, ans)
    }
    return ans
  }
  let nodes1: number[] = midTraversal(root1)
  let nodes2: number[] = midTraversal(root2)
  let ans: number[] = []
  let [i, j] = [0, 0]
  while (i < nodes1.length || j < nodes2.length) {
    if ((i < nodes1.length && nodes1[i] < nodes2[j]) || j >= nodes2.length) {
      ans.push(nodes1[i])
      i++
    } else {
      ans.push(nodes2[j])
      j++
    }
  }
  return ans
}
