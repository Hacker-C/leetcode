function reverseList(head: ListNode | null): ListNode | null {
  const reverse = (prev: ListNode, cur: ListNode):ListNode => {
    if (!cur) return prev
    let temp = cur.next
    cur.next = prev
    return reverse(cur, temp)
  }

  return reverse(null, head)
}