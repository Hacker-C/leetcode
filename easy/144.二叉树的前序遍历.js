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

// 方法2：迭代
var preorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    node?.right && stack.push(node.right);
    node?.left && stack.push(node.left);
  }
  return res;
};

// 方法1：递归
var preorderTraversal = function (root) {
  const help = (node, res = []) => {
    if (node) {
      res.push(node.val);
      help(node.left, res);
      help(node.right, res);
    }
    return res;
  };
  return help(root);
};
