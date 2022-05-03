function reorderLogFiles(logs: string[]): string[] {
  const isNumber = (x: string) => /^\d*$/.test(x)
  const compare = (str1: string, str2: string): number => {
    let [arr1, arr2] = [str1.split(' '), str2.split(' ')]
    if (isNumber(arr1[1]) && !isNumber(arr2[1])) {
      return 1
    }
    if (!isNumber(arr1[1]) && isNumber(arr2[1])) {
      return -1
    }
    if (!isNumber(arr1[1])) {
      let [content1, content2] = [arr1.slice(1).join(' '), arr2.slice(1).join(' ')]
      if (content1 != content2) {
        return content1 > content2 ? 1 : -1
      }
      return arr1[0] > arr2[0] ? 1 : -1
    }
  }
  logs.sort(compare)
  return logs
}
