/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === undefined || head === null || head.next === null) {
    return false
  }
  let cur = head
  let map = new Map()
  while (cur !== null) {
    if (map.has(cur.next)) {
      return true
    }
    map.set(cur, 1)
    cur = cur.next
  }
  return false
};