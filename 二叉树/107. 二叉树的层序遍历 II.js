/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  let q = [], ans = [];
  q.push(root);
  while (q.length) {
    let len = q.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      temp.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    ans.push(temp);
  }
  return ans.reverse();
};