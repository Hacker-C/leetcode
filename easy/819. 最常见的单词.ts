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
