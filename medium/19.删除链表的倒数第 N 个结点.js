/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
猜到要用双指针，但实在没想到，只能用了最常规的方法：获取链表长度 `len`，那么 `len - n + 1` 就是正数第几个要删除的元素，然后从头后移到这个要删除的节点，删除即可。
看了下解析，先让快指针走n步，然后快慢指针一起走，以为妙绝。
*/

var removeNthFromEnd = function (head, n) {
  let temp = head, len = 0
  while (temp) {
    temp = temp.next
    len++
  }
  let c = len - n
  let del = head, prev = head
  while (c-- > 0) {
    prev = del
    del = del.next
  }
  if (del === head) {
    head = del.next
  } else {
    prev.next = del.next
  }
  return head
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let n = new ListNode(1)
n.next = new ListNode(2)
n.next.next = new ListNode(3)
// n.next.next.next = new ListNode(4)
// n.next.next.next.next = new ListNode(5)
let ans = removeNthFromEnd(n, 3)
console.log(ans)