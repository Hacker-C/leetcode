function replaceWords(dictionary: string[], sentence: string): string {
  const words = sentence.split(' ')
  words.forEach((word, index) => {
    for (let prefix of dictionary) {
      if (word.startsWith(prefix)) {
        words[index] = prefix
        word = prefix
      }
    }
  })
  return words.join(' ')
}
