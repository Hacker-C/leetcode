class RecentCounter {
  counter: number
  preSumMap: Map<number, number>
  preTime: number
  indexes: number[]
  constructor() {
    this.counter = 0
    this.preSumMap = new Map([[0, 0]])
    this.preTime = 0
    this.indexes = []
  }

  ping(t: number): number {
    this.indexes.push(t)
    this.preSumMap.set(t, this.preSumMap.get(this.preTime) + 1)
    this.preTime = t
    let left = t - 3000
    for (let index of this.indexes) {
      if (index >= left) {
        left = index
        break
      }
    }
    return this.preSumMap.get(t) - this.preSumMap.get(left) + 1
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
