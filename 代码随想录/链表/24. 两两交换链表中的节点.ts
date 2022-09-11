function swapPairs(head: ListNode | null): ListNode | null {
  let vhead = new ListNode()
  vhead.next = head
  let prev = vhead, cur = head
  while(cur && cur.next) {
    let temp1 = prev.next
    let temp2 = cur.next.next
    prev.next = cur.next
    cur.next.next = temp1
    temp1.next = temp2
    prev = temp1
    cur = temp2
  }
  return vhead.next
};