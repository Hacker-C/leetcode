/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root], ans = [], k = 0;
  while (q.length) {
    let len = q.length;
    let temp = [];
    while (len--) {
      let node = q.shift();
      temp.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    ans.push((k++) & 1 ? temp.reverse() : temp);
  }
  return ans;
};