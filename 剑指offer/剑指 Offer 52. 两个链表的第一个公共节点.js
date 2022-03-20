/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 方法2：空间复杂度：O(1)
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null
  let p1 = headA,
    p2 = headB
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next
    p2 = p2 === null ? headA : p2.next
  }
  return p1
}

// 方法1：哈希
var getIntersectionNode = function (headA, headB) {
  const set = new Set()
  while (headA) {
    set.add(headA)
    headA = headA.next
  }
  while (headB) {
    if (set.has(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
}
