function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let stack = []
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  }
  return stack.length > 0 ? false : true
}
