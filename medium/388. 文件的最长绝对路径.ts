function lengthLongestPath(input: string): number {
  let res = 0
  let preLen: Map<number, number> = new Map()
  preLen.set(-1, 0)
  // \n 分层，几个 \t 就第几层
  console.log(input)
  for (let line of input.split('\n')) {
    let depth = line.match(/\t/g)?.length ?? 0
    preLen.set(depth, preLen.get(depth - 1) + line.length - depth)
    if (line.includes('.')) {
      res = Math.max(res, preLen.get(depth) + depth)
    }
  }
  return res
}

lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext')
