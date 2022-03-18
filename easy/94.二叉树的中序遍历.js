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

// 方法3：迭代（栈实现）
var inorderTraversal = function (root) {
  let stack = [];
  let res = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};

// 方法2：迭代（颜色标记）
var inorderTraversal = function (root) {
  const [WHITE, GRAY] = [0, 1];
  let res = [];
  let stack = [[WHITE, root]];
  while (stack.length) {
    [color, node] = stack.pop();
    if (!node) continue;
    if (color === WHITE) {
      stack.push([WHITE, node.right]);
      stack.push([GRAY, node]);
      stack.push([WHITE, node.left]);
    } else {
      res.push(node.val);
    }
  }
  return res;
};

// 方法1：递归
var inorderTraversal = function (root) {
  const help = (node, res = []) => {
    if (node) {
      help(node.left, res);
      res.push(node.val);
      help(node.right, res);
    }
    return res;
  };
  return help(root);
};
