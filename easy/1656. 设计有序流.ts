class OrderedStream {
  state: string[]
  ptr: number
  constructor(n: number) {
    this.state = Array(n + 1).fill('')
    this.ptr = 1
  }

  insert(idKey: number, value: string): string[] {
    if (idKey !== this.ptr) {
      this.state[idKey] = value
      return []
    }
    this.state[idKey] = value
    let res: string[] = []
    for (let i = idKey; i < this.state.length; i++) {
      if (this.state[i] !== '') {
        res.push(this.state[i])
        this.ptr++
      } else break
    }
    return res
  }
}
