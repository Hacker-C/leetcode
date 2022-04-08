/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode()
  let cur = head
  let carry = 0
  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
    let node = new ListNode(sum % 10)
    cur.next = node
    carry = (sum / 10) >>> 0
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
    cur = node
  }
  if (carry >= 1) {
    let node = new ListNode(carry)
    cur.next = node
  }
  return head.next
}
