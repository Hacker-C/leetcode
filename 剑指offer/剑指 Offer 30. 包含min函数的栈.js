/**
 * initialize your data structure here.
 */
//  设置一个 min 属性，每次入栈出栈都更新它。
var MinStack = function () {
  this.items = [];
  this.minValue = Infinity;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push(x);
  if (x < this.minValue) {
    this.minValue = x;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let res = this.items.pop();
  if (res === this.minValue) {
    this.minValue = Math.min.apply(null, this.items);
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minValue;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */