function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let vhead = new ListNode()
  vhead.next = head
  let slow = vhead, fast = vhead
  while(n--) {
    fast = fast.next
  }
  fast = fast.next
  while(fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return vhead.next
}