/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let cur = head.next
  let prev = head
  while (cur !== null) {
    if (cur.val === prev.val) {
      prev.next = cur.next
    } else {
      prev = prev.next
    }
    cur = cur.next
  }
  return head
};