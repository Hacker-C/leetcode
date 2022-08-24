function lexicalOrder(n: number): number[] {
  return Array(n)
    .fill('')
    .map((e, i) => i + 1)
    .sort()
}
