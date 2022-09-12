// O(1) 空间，快慢指针
function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      let index1 = head, index2 = fast
      while(index1 !== index2) {
        index1 = index1.next
        index2 = index2.next
      }
      return index1
    }
  }
  return null
}

// 哈希
function detectCycle1(head: ListNode | null): ListNode | null {
  const set: Set<ListNode> = new Set()
  while(head) {
    if (set.has(head)) {
      return head
    }
    set.add(head)
    head = head.next
  }
  return null
};