// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head: ListNode = new ListNode() // 虚头节点
  let cur: ListNode = head
  let carry: number = 0 // 进位
  while (l1 || l2) {
    let total: number = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
    carry = Math.floor(total / 10)
    let newNode: ListNode = new ListNode(total % 10)
    cur.next = newNode
    cur = newNode
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  if (carry > 0) cur.next = new ListNode(carry)
  return head.next
}
