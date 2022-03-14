/**
 * @param {number[]} numbers
 * @return {number}
 */

var minArray = function (numbers) {
  // 二分
  let l = 0, r = numbers.length - 1;
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (numbers[mid] > numbers[r]) {
      l = mid + 1;
    } else if (numbers[mid] < numbers[r]) {
      r = mid - 1;
    } else {
      j--;
    }
  }
  return numbers[l];
}

var minArray = function (numbers) {
  // 旋转数组
  const reverse = (arr, i, j) => {
    if (i >= j) return;
    while (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  let m = 0;
  while (m < numbers.length - 1) {
    if (numbers[m] > numbers[m + 1]) {
      break;
    }
    m++;
  }
  console.log(numbers[m + 1])
  reverse(numbers, 0, m);
  reverse(numbers, m + 1, numbers.length - 1);

  // 最后一个元素即为最小值
  return numbers[numbers.length - 1];
};

console.log(minArray([2, 2, 2, -3, -2, -1]))