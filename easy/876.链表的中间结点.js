/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  (3) 快慢指针，以为妙绝。慢指针每次移动一个位置，快指针每次移动两个位置，这样当快指针到达尾部，慢指针肯定位于中间节点。
var middleNode = function (head) {
  let slow = head, fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
};

// (2) 获取到节点数量 `n/2`，然后节点从头部后移 `n/2`（处理下奇偶）次；
// var middleNode = function (head) {
//   let l = head, r = head, c = 0
//   while (r) {
//     r = r.next
//     c++
//   }
//   c = c & 1 ? Math.floor(c / 2) : c / 2
//   while (c--) {
//     l = l.next
//   }
//   return l
// };

// (1) 第一次想到的方法为遍历节点，存节点到数组中，那么就可以直接访问到中间节点了；
