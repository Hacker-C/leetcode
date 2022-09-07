function reorderSpaces(text: string): string {
  let words = []
  let count = 0
  let word = ''
  for (let c of text) {
    if (c === ' ') {
      if (word) {
        words.push(word)
        word = ''
      }
      count++
    } else {
      word += c
    }
  }
  if (word) words.push(word)
  if (words.length === 1) return words[0] + ' '.repeat(text.length-words[0].length)
  let space = Math.floor(count / (words.length-1))
  let left = count - space * (words.length - 1)
  return words.join(' '.repeat(space)) + ' '.repeat(left)
};