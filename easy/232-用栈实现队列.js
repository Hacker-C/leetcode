var MyQueue = function () {
  // 弹出栈，元素出队列时使用的栈
  this.stack1 = []
  // 压入栈，当有元素入队列时，用来过度，保证后来的元素位于栈底
  this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.stack1.length) {
    this.stack2.push(this.stack1.pop())
  }
  this.stack1.push(x)
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop())
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack1.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[this.stack1.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0
};


/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
