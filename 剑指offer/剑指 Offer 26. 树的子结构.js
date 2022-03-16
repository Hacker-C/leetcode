/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {

  let res = false;
  if (!A || !B) return false;
  if (A.val === B.val) res = help(A, B);
  if (!res) res = isSubStructure(A.left, B);
  if (!res) res = isSubStructure(A.right, B);
  return res;

  function help(A, B) {
    if (!B) return true;
    if (!A) return false;
    if (A.val !== B.val) return false;
    return help(A.left, B.left) && help(A.right, B.right);
  }

};