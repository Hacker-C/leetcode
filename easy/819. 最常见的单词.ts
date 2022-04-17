function mostCommonWord(paragraph: string, banned: string[]): string {
  return Array.from(
    paragraph
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, ' ')
      .split(/\W+/)
      .filter((x) => !banned.includes(x) && Boolean(x))
      .reduce((pre, cur) => {
        pre.set(cur, (pre?.get(cur) ?? 0) + 1)
        return pre
      }, new Map())
  ).reduce((pre, cur) => (cur[1] > pre[1] ? cur : pre), ['', -1])[0]
}
