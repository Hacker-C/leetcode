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
  let ret = new ListNode()
  let cur = ret
  if (head === null) {
    return head
  }
  let save = null // 保存上一个节点
  while (head !== null) {
    let temp = new ListNode(head.val)
    cur.next = temp
    temp.next = save
    save = temp
    head = head.next
  }
  return ret.next
};