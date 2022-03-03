/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  let temp = new ListNode(-1)
  temp.next = head
  let prev = temp
  while (prev.next != null) {
    if (prev.next.val == val) {
      prev.next = prev.next.next
    } else {
      prev = prev.next
    }
  }
  return temp.next
};