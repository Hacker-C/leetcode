/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// # 一次遍历
var removeNthFromEnd = function (head, n) {
  // 虚拟头节点
  let temp = new ListNode()
  let l = temp
  let r = temp
  while (n >= 0) {
    r = r.next
    n--
  }
  while (r) {
    l = l.next
    r = r.next
  }
  let del = l.next
  l.next = del.next
  return temp
}
