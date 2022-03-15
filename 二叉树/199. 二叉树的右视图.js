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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let q = [root], ans = [];
  while (q.length) {
    let len = q.length;
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      if (i === len - 1) {
        ans.push(node.val);
      }
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return ans;
};