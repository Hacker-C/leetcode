// 解法1：使用 1 个队列
var MyStack = function () {
  this.queue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
  for (let i = 0; i < this.queue.length - 1; i++) {
    this.queue.push(this.queue.shift())
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */