/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  let q = [root];
  while (q.length) {
    let curLen = q.length;
    let temp = [];
    for (let i = 0; i < curLen; i++) {
      let node = q.shift();
      if (i < curLen - 1) node.next = q[0];
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return root;
};