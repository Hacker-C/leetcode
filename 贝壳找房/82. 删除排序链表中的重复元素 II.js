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
// # 方法1：哈希表
var deleteDuplicates = function (head) {
  let cur = head
  let map = new Map()
  while (cur) {
    map.set(cur.val, (map?.get(cur.val) ?? 0) + 1)
    cur = cur.next
  }
  // 过滤重复值节点
  let values = []
  for (let [value, count] of map) {
    if (count === 1) values.push(value)
  }
  let ret = new ListNode()
  let temp = ret
  for (let value of values) {
    let node = new ListNode(value)
    temp.next = node
    temp = node
  }
  return ret.next
}
