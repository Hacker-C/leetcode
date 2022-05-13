function oneEditAway(first: string, second: string): boolean {
  let [l1, l2] = [first.length, second.length]
  if (Math.abs(l1 - l2) > 1) return false
  if (l1 === l2) {
    let count = 0
    for (let i = 0; i < l1; i++) {
      if (first[i] !== second[i]) count++
      if (count > 1) return false
    }
    return true
  }
  if (l1 > l2) [first, second] = [second, first]
  for (let i = 0; i < second.length; i++) {
    let temp = [...second]
    temp.splice(i, 1)
    if (temp.join('') === first) return true
  }
  return false
}
