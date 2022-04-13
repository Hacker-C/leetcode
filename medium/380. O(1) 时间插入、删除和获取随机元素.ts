class RandomizedSet {
  items: Object
  len: number
  constructor() {
    this.items = {}
    this.len = 0
  }

  insert(val: number): boolean {
    if (this.items[val] === undefined) {
      this.items[val] = val
      this.len++
      return true
    }
    return false
  }

  remove(val: number): boolean {
    if (this.items[val] !== undefined) {
      delete this.items[val]
      this.len--
      return true
    }
    return false
  }

  getRandom(): number {
    let randomN = Math.floor(Math.random() * this.len)
    return this.items[Object.keys(this.items)[randomN]]
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
