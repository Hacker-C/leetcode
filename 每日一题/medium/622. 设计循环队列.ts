class MyCircularQueue {
  max: number
  queue: number[]
  constructor(k: number) {
    this.max = k
    this.queue = []
  }

  enQueue(value: number): boolean {
    if (this.queue.length >= this.max) {
      return false
    }
    return this.queue.push(value), true
  }

  deQueue(): boolean {
    if (this.queue.length <= 0) {
      return false
    }
    return this.queue.shift(), true
  }

  Front(): number {
    return this.queue.length <= 0 ? -1 : this.queue[0]
  }

  Rear(): number {
    return this.queue.length <= 0 ? -1 : this.queue[this.queue.length - 1]
  }

  isEmpty(): boolean {
    return this.queue.length === 0
  }

  isFull(): boolean {
    return this.queue.length === this.max
  }
}

// let circularQueue = new MyCircularQueue(3)

// circularQueue.enQueue(1) // 返回 true
// circularQueue.enQueue(2) // 返回 true
// circularQueue.enQueue(3) // 返回 true
// circularQueue.enQueue(4) // 返回 false，队列已满
// circularQueue.Rear() // 返回 3
// circularQueue.isFull() // 返回 true
// console.log(circularQueue.deQueue()) // 返回 true
// console.log(circularQueue.enQueue(4)) // 返回 true
// console.log(circularQueue.Rear()) // 返回 4
