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
// 方法2
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null
  let p1 = headA
  let p2 = headB
  while (p1 !== p2) {
    p1 = p1 ? p1.next : headB
    p2 = p2 ? p2.next : headA
  }
  return p1
}

// 方法1
var getIntersectionNode = function (headA, headB) {
  let map = new Map()
  let cur = headA
  while (cur) {
    map.set(cur, 1)
    cur = cur.next
  }
  let temp = headB
  while (temp) {
    if (map.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null
}
