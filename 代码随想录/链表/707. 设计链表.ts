class AListNode {
  val: number = undefined
  next: AListNode = null
  constructor(val?: number, next?: AListNode | null) {
    this.val = val
    this.next = next
  }
}

class MyLinkedList {
  vhead: AListNode = new AListNode()
  private len: number = 0
  // constructor() {
  //   this.vhead = new AListNode()
  //   this.tail = null
  // }

  get(index: number): number {
    if (index < 0 || index >= this.len) {
      return -1
    }
    let cur = this.vhead.next
    while(index--) {
      cur = cur.next
    }
    return cur.val
  }

  addAtHead(val: number): void {
    const newNode = new AListNode(val)
    newNode.next = this.vhead.next
    this.vhead.next = newNode
    this.len++
  }

  addAtTail(val: number): void {
    const newNode = new AListNode(val)
    let cur = this.vhead
    while(cur.next) {
      cur = cur.next
    }
    cur.next = newNode
    this.len++
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.len) return void 0
    if (index < 0) {
      this.len++
      return void this.addAtHead(val)
    }
    let cur = this.vhead
    const newNode = new AListNode(val)
    while(index--) {
      cur = cur.next
    }
    newNode.next = cur.next
    cur.next = newNode
    this.len++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.len) {
      return void 0
    }
    let cur = this.vhead
    while(index--) {
      cur = cur.next
    }
    cur.next = cur.next.next
    this.len--
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/