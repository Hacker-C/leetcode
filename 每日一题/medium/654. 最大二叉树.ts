function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const max = (arr: number[]): [number, number] => {
    let [index, value] = [-1, -Infinity]
    arr.forEach((v, i) => {
      if (v > value) {
        ;[index, value] = [i, v]
      }
    })
    return [index, value]
  }
  const create = (arr: number[], node = new TreeNode()) => {
    const [i, v] = max(arr)
    if (i !== -1) {
      node.val = v
      node.left = create(arr.slice(0, i))
      node.right = create(arr.slice(i + 1))
      return node
    }
    return null
  }
  return create(nums)
}
