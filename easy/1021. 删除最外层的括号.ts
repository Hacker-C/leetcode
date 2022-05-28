function removeOuterParentheses(s: string): string {
  const list: string[] = []
  let stack: string[] = []
  let [l, r] = [0, 0]
  let ans = ''
  for (const c of s) {
    if (c === '(') l++
    else r++
    stack.push(c)
    if (l === r && l !== 0) {
      list.push(stack.join(''))
      stack = []
      l = r = 0
    }
  }
  for (const e of list) {
    ans += e.slice(1, -1)
  }
  return ans
}
// removeOuterParentheses('(()())(())(()(()))')
