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
var averageOfLevels = function (root) {

  const average = arr => arr.reduce((pre, cur) => pre + cur, 0) / arr.length;

  let q = [root], ans = 0;
  while (q.length) {
    let len = q.length;
    let temp = [];
    while (len--) {
      let node = q.shift();
      temp.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    ans.push(average(temp));
  }

  return ans;

};
