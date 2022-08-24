function backspaceCompare(s: string, t: string): boolean {
  const help = (str: string): string => {
    const stack: string[] = []
    for (let chr of str) {
      if (chr === '#') {
        stack.pop()
      } else {
        stack.push(chr)
      }
    }
    return stack.join('')
  }
  return help(s) === help(t)
}
