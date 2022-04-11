/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
  // new Bank([10, 100, 20, 50, 30])
  this.accounts = balance;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  if (
    account1 > this.accounts.length ||
    account2 > this.accounts.length ||
    money > this.accounts[account1 - 1]
  ) {
    return false;
  }
  this.accounts[account2 - 1] += money;
  this.accounts[account1 - 1] -= money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  if (account > this.accounts.length) {
    return false;
  }
  this.accounts[account - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  if (money > this.accounts[account - 1] || account > this.accounts.length) {
    return false;
  }
  this.accounts[account - 1] -= money;
  return true;
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

let a = ['Bank', 'transfer', 'transfer', 'deposit'];
// [[[92,62,12,81,77,38,71,8,42,38]],[3,2,18],[29,3,99],[8,97]]
