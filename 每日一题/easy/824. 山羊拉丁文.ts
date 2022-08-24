function toGoatLatin(sentence: string): string {
  return sentence
    .split(' ')
    .map((v, i, a) => {
      if (/^[aeiou]/i.test(v)) {
        v += 'ma'
      } else {
        v = v.slice(1) + v[0] + 'ma'
      }
      while (i-- >= 0) v += 'a'
      return v
    })
    .join(' ')
}
