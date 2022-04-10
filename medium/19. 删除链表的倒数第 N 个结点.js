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
// # 两次遍历
var removeNthFromEnd = function (head, n) {
  let cur = head
  let nodes = []
  while (cur) {
    nodes.push(cur)
    cur = cur.next
  }
  let del = nodes[nodes.length - n]
  if (del === head) {
    // 头节点
    head = head.next
  } else {
    // 非头节点
    let pre = nodes[nodes.length - n - 1]
    pre.next = del.next
  }
  return head
}
