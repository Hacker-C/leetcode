function isPrefixOfWord(sentence: string, searchWord: string): number {
  const source = sentence.trim().split(' ')
  for (let i = 0; i < source.length; i++) {
    let j = 0
    for (; j < searchWord.length; j++) {
      if (source[i][j] !== searchWord[j]) break
    }
    if (j === searchWord.length) return i + 1
  }
  return -1
}
