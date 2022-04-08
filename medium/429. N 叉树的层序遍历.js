/**
 * Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return null
  let q = [root]
  let ans = []
  while (q.length) {
    let curLen = q.length
    let sub = []
    while (curLen--) {
      let node = q.shift()
      sub.push(node.val)
      for (let child of node.children) {
        q.push(child)
      }
    }
    ans.push(sub)
  }
  return ans
}
