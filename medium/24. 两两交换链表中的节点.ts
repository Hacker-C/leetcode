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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let temp = head
  let nodes: ListNode[] = []
  while (temp) {
    nodes.push(temp)
    temp = temp.next
  }
  for (let i = 1; i < nodes.length; i += 2) {
    ;[nodes[i - 1], nodes[i]] = [nodes[i], nodes[i - 1]]
  }
  let ret = nodes[0]
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  nodes[nodes.length - 1].next = null
  return ret
}
