/**
 *  Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let cur = head;
  let map = new Map();
  while (cur !== null) {
    let node = new Node(cur.val);
    map.set(cur, node);
    cur = cur.next;
  }
  let now = head;
  while (now !== null) {
    // 新头节点指向下一个新节点
    map.get(now).next = map?.get(now?.next) || null;//特判指向null的
    map.get(now).random = map.get(now.random); // now.random 总会指向一个已有节点
    now = now.next;
  }
  return map.get(head);
};