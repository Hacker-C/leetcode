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
var reverseList = function (head) {
  let prev = new ListNode()
  let cur = head
  while (cur !== null) {
    let temp = cur.next // 保存cur的下一个
    cur.next = prev // cur反向指向 prev
    prev = cur // prev 移动到 cur
    cur = temp // cur 指向之前保存的cur的下一个
  }
  return prev
};