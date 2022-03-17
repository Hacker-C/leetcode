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

// 方法2：
// 弗洛伊德龟兔赛跑算法（floyd's tortoise and hare，环形检测算法）
// 第二次：空间复杂度为一：
// 弗洛伊德龟兔赛跑算法（floyd's tortoise and hare，环形检测算法），同一跑道出发，兔子每次走两步（quick），乌龟（low）每次走一步，只要存在环，那么两者必定会相遇。
// - 时间复杂度：O(n)
// - 空间复杂度：O(1)

// > 另外，记录相遇的地方，让兔子停住，乌龟继续走，下次相遇所用的次数就是环的长度。
var hasCycle = function (head) {
  let low = head, quick = head;
  while(quick !== null && quick.next !== null) {
    low = low.next;
    quick = quick.next.next;
    if (low === quick) return true;
  }
  return false;
}

// 方法1：
// 哈希，空间复杂度：O(n)；时间复杂度：O(n)
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