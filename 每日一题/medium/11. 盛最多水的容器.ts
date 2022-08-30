function maxArea(height: number[]): number {
  let [low, high] = [0, height.length - 1]
  let res = -1
  while (low <= high) {
    if (height[low] < height[high]) {
      res = Math.max(res, (high - low) * height[low])
      low++
    } else {
      res = Math.max(res, (high - low) * height[high])
      high--
    }
  }
  return res
}
