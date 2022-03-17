力扣每日一题

### TODO

- [ ] [中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)：用递归实现了，还没用迭代实现..

### GOOD

- [x] [层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)：使用队列进行层序遍历，并把每层节点存入同一个数组。其中把节点存入同一个数组的思想，可以用来求二叉树的最大深度。
- [x] [寻找缺失数字](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)：凡是看到 **有序** 数组，就要首先想到 **二分**。

1. 二分模板

```js
var search = function(nums, target) {
  let l = 0, r = nums.length;
  while(l <= r) {
    let mid = (l + r) >> 1;
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
};
```

2. 层序遍历模板

```js
var levelOrder = function (root) {
  if (root) {
    return [];
  }
  let q = [];
  let ans = [];
  q.push(root);
  while (q.length) {
    let len = q.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      let node = q.shift();
      temp.push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    ans.push(temp);
  }
  return ans;
};
```
