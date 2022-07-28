function arrayRankTransform(arr: number[]): number[] {
  if (!arr.length) return []
  const temp = [...arr]
  temp.sort((a, b) => a - b)
  const map = new Map()
  let j = 1
  map.set(temp[0], 1)
  for (let i = 1; i < temp.length; i++) {
    if (temp[i] === temp[i - 1]) {
      map.set(temp[i], j)
    } else {
      map.set(temp[i], ++j)
    }
  }
  return arr.map(x => map.get(x))
}
