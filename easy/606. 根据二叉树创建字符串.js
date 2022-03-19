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
 * @return {string}
 */
var tree2str = function (root) {
  let res = '';
  const help = (node) => {
    res += '(';
    res += node.val;
    if (node.left) help(node.left);
    else if (node.right) res += '()';
    if (node.right) help(node.right);
    res += ')';
  };
  help(root);
  return res.slice(1, res.length - 1);
};
