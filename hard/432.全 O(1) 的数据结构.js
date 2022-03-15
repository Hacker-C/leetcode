var AllOne = function () {
  this.items = {};
  this.minValue = Infinity;
  this.min = '';
  this.maxValue = -Infinity;
  this.max = '';
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype._min = function () {
  let min = Infinity;
  for (let k in this.items) {
    if (this.items[k] < min) {
      min = this.items[k];
      this.min = k;
    }
  }
  this.minValue = min;
}
AllOne.prototype._max = function () {
  let max = -Infinity;
  for (let k in this.items) {
    if (this.items[k] > min) {
      max = this.items[k];
      this.max = k;
    }
  }
  this.maxValue = max;
}
AllOne.prototype.inc = function (key) {
  if (this.items[key]) {
    this.items[key]++;
    if (this.items[key] > this.maxValue) {
      this.max = key;
      this.maxValue = this.items[key];
    }
    if (this.min === key) {
      this._min();
    }
  } else {
    this.items[key] = 1;
    if (this.items[key] > this.maxValue) {
      this.max = key;
      this.maxValue = this.items[key];
    }
    if (this.items[key] < this.minValue) {
      this.min = key;
      this.minValue = this.items[key];
    }
  }
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  if (this.items[key] === 1) {
    if (key === this.min) {
      this._min();
    }
    if (key === this.max) {
      this._max();
    }
    delete this.items[key];
  } else {
    this.items[key]--;
    if (this.items[key] < this.minValue) {
      this.min = key;
      this.minValue = this.items[key];
    }
    if (this.max === key) {
      this._max();
    }
  }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (Object.getOwnPropertyNames(this.items).length === 0) return '';
  return this.max;
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (Object.getOwnPropertyNames(this.items).length === 0) return '';
  return this.min;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */