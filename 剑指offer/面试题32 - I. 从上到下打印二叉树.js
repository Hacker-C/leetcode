/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root], ans = [];
  while (q.length) {
    let len = q.length;
    while (len--) {
      let node = q.shift();
      ans.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return ans;
};