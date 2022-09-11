function removeElements(head: ListNode | null, val: number): ListNode | null {
  let vhead = new ListNode()
  vhead.next = head
  let cur = vhead
  while(cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else cur = cur.next
  }
  return vhead.next
};