function mostCommonWord(paragraph: string, banned: string[]): string {
  return Array.from(
    paragraph
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, ' ')
      .split(/[ !?',;.]/)
      .filter((x) => !banned.includes(x) && Boolean(x))
      .reduce((pre, cur) => {
        pre.set(cur, (pre?.get(cur) ?? 0) + 1)
        return pre
      }, new Map())
  ).reduce(
    (pre, cur) => {
      if (cur[1] > pre[1]) {
        pre = cur
      }
      return pre
    },
    ['', -1]
  )[0]
}
let paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'
let banned = ['hit']
console.log(mostCommonWord(paragraph, banned))
