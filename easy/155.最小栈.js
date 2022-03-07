var MinStack = function () {
  this.items = []
  this.min = +Infinity
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (val < this.min) this.min = val
  this.items.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let top = this.items.pop()
  if (top === this.min) {
    this.min = Math.min.apply(null, this.items)
  }
  return top
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack)
console.log(minStack.getMin()); //--> 返回 - 3.
minStack.pop();
console.log(minStack.top()); //--> 返回 0.
console.log(minStack.getMin()); //--> 返回 - 2.
