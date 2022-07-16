class MovingAverage {
  size: number
  queue: number[]
  constructor(size: number) {
    this.size = size
    this.queue = []
  }

  next(val: number): number {
    if (this.queue.length < this.size) {
      this.queue.push(val)
    } else {
      this.queue.shift()
      this.queue.push(val)
    }
    return this.queue.reduce((a, b) => a + b) / this.queue.length
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
