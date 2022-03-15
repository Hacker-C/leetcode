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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let q = [root], c = 0;
  while (q.length) {
    let len = q.length;
    c++;
    while (len--) {
      let node = q.shift();
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return c;
};