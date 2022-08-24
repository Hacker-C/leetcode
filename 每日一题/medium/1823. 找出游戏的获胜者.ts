function findTheWinner(n: number, k: number): number {
  const queue: number[] = Array.from({ length: n }, (_, i) => i + 1)
  while (queue.length > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.shift())
    }
    queue.shift()
  }
  return queue[0]
}
