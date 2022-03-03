var Node = function (val) {
  this.val = val
  this.next = null
}

var MyLinkedList = function () {
  this.head = null
  this.count = 0
};

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= this.count) {
    return -1
  }
  let cur = this.head
  let i = 0
  for (; i < index && cur !== null; i++) {
    cur = cur.next
  }
  return cur
};



/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.count) {
    return -1
  }
  return this.getNode(index).val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.count, val)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.count) {
    return false
  }
  let node = new Node(val)
  if (this.head === null) {
    this.head = node
    this.count++
    return true
  }
  if (index <= 0) {
    // 在链表开头添加
    let temp = this.head
    this.head = node
    node.next = temp
  } else {
    let current = this.getNode(index - 1)
    let temp = current.next
    current.next = node
    node.next = temp
  }
  this.count++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.count || this.count === 0) {
    return
  }
  if (index === 0) {
    this.head = this.head.next
  } else {
    let prev = this.getNode(index - 1)
    prev.next = prev.next.next
  }
  this.count--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);   //链表变为1-> 2-> 3
console.log(linkedList)
let ret = linkedList.get(1);          //返回2
console.log(ret)
linkedList.deleteAtIndex(1);  //现在链表是1-> 3

let ret1 = linkedList.get(1);            //返回3
console.log(ret1)
