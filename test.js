const target = { sum: 0 }
const handler = {
  get(trapTarget, property, receiver) {
    if (property === Symbol.toPrimitive) {
      let temp = trapTarget.sum
      trapTarget.sum = 0
      return () => temp
    }
    trapTarget.sum += Number(property)
    return receiver
  }
}
const add = new Proxy(target, handler)

console.log(add[1][2][3] + 4) // 10
console.log(add[10][20] + 30) // 60
console.log(add[1000][2000][3000] + 4000) // 10000
