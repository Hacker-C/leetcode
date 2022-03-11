/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let cur = head, ans = []
  while (cur) {
    ans.push(cur.val);
    cur = cur.next;
  }
  return ans.reverse(); // 这里可以手写逆序
};