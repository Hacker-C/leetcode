// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
class NestedInteger {
  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  constructor(value?: number) {
    // ...
  }
  // Return true if this NestedInteger holds a single integer, ratheran a nested list.
  isInteger(): boolean | void {
    // ...
  }
  // Return the single integer that this NestedInteger holds, if it holdssingle integer
  // Return null if this NestedInteger holds a nested list
  getInteger(): number | null | void {
    // ...
  }
  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {
    // ...
  }
  // Set this NestedInteger to hold a nested list and adds a nestedteger elem to it.
  add(elem: NestedInteger) {
    // ...
  }
  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  getList(): NestedInteger[] | void {
    // ...
  }
}

function deserialize(s: string): NestedInteger {
  let value = JSON.parse(s)
  if (!Array.isArray(value)) {
    return new NestedInteger(value)
  }
  const help = (arr): NestedInteger => {
    let ans = new NestedInteger()
    arr.forEach((item) => {
      if (Array.isArray(item)) ans.add(help(item))
      else ans.add(new NestedInteger(item))
    })
    return ans
  }
  return help(value)
}
