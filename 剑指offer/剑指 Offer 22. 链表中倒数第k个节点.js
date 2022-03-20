/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 方法2：空间复杂度：O(1)
var getKthFromEnd = function (head, k) {
  let l = head,
    r = head
  while (k--) {
    r = r.next
  }
  while (r) {
    l = l.next
    r = r.next
  }
  return l
}

// 方法1：数组存储，空间复杂度O(n)
var getKthFromEnd = function (head, k) {
  let cur = head
  let save = []
  while (cur) {
    save.push(cur)
    cur = cur.next
  }
  return save[save.length - k + 1]
}
