/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1, h = n
    if (isBadVersion(1)) return 1
    while (l <= h) {
      let m = l + Math.floor((h - l) / 2)
      if (!isBadVersion(m - 1) && isBadVersion(m)) return m
      if (isBadVersion(m - 1) && isBadVersion(m)) h = m - 1
      if (!isBadVersion(m - 1) && !isBadVersion(m)) l = m + 1
    }
  };
};
