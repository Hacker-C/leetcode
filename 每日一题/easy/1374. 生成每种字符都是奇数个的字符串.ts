// 每日一题
function generateTheString(n: number): string {
  return n & 1 ? 'a'.repeat(n) : 'a'.repeat(n - 1) + 'b'
}
