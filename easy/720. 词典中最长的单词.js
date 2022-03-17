/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {

  let map = new Map();
  for (let w of words) {
    map.set(w, 1);
  }
  let ans = '';
  for (let w of words) {
    let flag = 1;
    for (let i = 0; i < w.length; i++) {
      let sub = w.slice(0, i + 1)
      if (!map.has(sub)) {
        flag = false;
        break;
      }
    }
    if (flag) {
      if (w.length > ans.length) {
        ans = w;
      } else if (w.length === ans.length && w < ans) {
        ans = w;
      }
    }
  }
  // console.log(words)
  // console.log(ans);
  return ans;
};

words = ["rac", "rs", "ra", "on", "r", "otif", "o", "onpdu", "rsf", "rs", "ot", "oti", "racy", "onpd"]

longestWord(words)