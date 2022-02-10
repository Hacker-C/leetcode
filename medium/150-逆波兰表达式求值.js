/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  for (const e of tokens) {
    if (!isNaN(e)) {
      // e 为数字，压栈
      stack.push(parseInt(e))
    } else {
      // e 为运算符
      const a = stack.pop()
      const b = stack.pop()
      let res = 0
      switch (e) {
        case '+':
          res = a + b
          break
        case '-':
          res = b - a
          break
        case '*':
          res = a * b
          break
        case '/':
          res = parseInt(b / a)
      }
      stack.push(res)
    }
  }
  return stack[0]
};

let ans = evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
console.log(ans)