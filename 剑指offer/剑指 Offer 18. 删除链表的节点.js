/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) {
    head = head.next
    return head
  }
  let cur = head,
    prev = head
  while (cur.val !== val) {
    prev = cur
    cur = cur.next
  }
  prev.next = cur.next
  return head
}
