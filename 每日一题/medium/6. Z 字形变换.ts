function convert(s: string, numRows: number): string {
  if (numRows === 1) return s
  let row = numRows
  let col = Math.ceil(s.length / (row + (row - 2))) * (row - 1)
  let array = Array(row).fill('')
  for (let i = 0; i < array.length; i++) {
    array[i] = []
    for (let j = 0; j < col; j++) {
      array[i].push('')
    }
  }
  let index = 0
  for (let j = 0; j < col; j += row - 1) {
    for (let i = 0; i < row; i++) {
      array[i][j] = s[index++] ?? ''
    }
    let [a, b] = [row - 2, j + 1]
    // let [c, d] = [1, j + row - 2]
    let count = row - 3 + 1
    while (count--) {
      array[a--][b++] = s[index++] ?? ''
    }
  }
  return array.reduce((p: string, c: string[]) => p + c.join(''), '')
}
