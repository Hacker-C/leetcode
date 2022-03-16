/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {

  if (!root) return false;

  const help = (l, r) => {
    if (!l && !r) return true;
    if (l && r) {
      if (l.val !== r.val) return false;
      return help(l.left, r.right) && help(l.right, r.left);
    }
    return false;
  }

  return help(root.left, root.right);

};