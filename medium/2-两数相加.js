function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let a = '', b = ''
  while (l1 != null) {
    a = l1.val + a
    l1 = l1.next
  }
  while (l2 != null) {
    b = l2.val + b
    l2 = l2.next
  }
  let res = (BigInt(a) + BigInt(b)).toString()
  let ret = new ListNode()
  for (let e of res) {
    if (e === 'n') break
    let node = new ListNode(parseInt(e))
    node.next = ret.next
    ret.next = node
  }
  return ret.next
};

/*
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
[5,6,4]

*/