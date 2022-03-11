var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop())
  }
  this.stack1.push(value)
  while (this.stack2.length > 0) {
    this.stack1.push(this.stack2.pop())
  }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  return this.stack1.length === 0 ? -1 : this.stack1.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */