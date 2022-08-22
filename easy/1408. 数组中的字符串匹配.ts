function stringMatching(words: string[]): string[] {
  const res: string[] = []
  words.forEach((item, index) => {
    for (let i = 0; i < words.length; i++) {
      if (index !== i && words[i].includes(item)) {
        res.push(item)
        break
      }
    }
  })
  return res
}
