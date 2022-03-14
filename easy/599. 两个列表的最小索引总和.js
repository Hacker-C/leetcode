/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let map = new Map();
  let res = {}, min = Infinity;
  list1.forEach((item, index) => {
    map.set(item, index);
  })
  list2.forEach((item, index) => {
    if (map.get(item) !== undefined) {
      let sum = map.get(item) + index;
      res[item] = map.get(item) + index;
      if (sum < min) min = sum;
    }
  })
  let ans = [];
  for (const k in res) {
    if (res[k] === min) ans.push(k);
  }
  return ans;
};

l1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
l2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]

findRestaurant(l1, l2)