/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null
  let cur = head
  let nodes: ListNode[] = []
  while (cur) {
    nodes.push(cur)
    cur = cur.next
  }
  k %= nodes.length
  if (k > 0) {
    nodes[nodes.length - 1].next = head
    nodes[nodes.length - k - 1].next = null
  } else {
    return head
  }
  return nodes[nodes.length - k]
}
