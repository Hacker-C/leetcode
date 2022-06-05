class Solution {
  radius: number
  x_center: number
  y_center: number
  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius
    this.x_center = x_center
    this.y_center = y_center
  }

  randPoint(): number[] {
    const { random, PI, sin, cos, pow, sqrt } = Math
    const angle = random() * 360
    const { radius, x_center, y_center } = this
    // 随机从面积中取出一点，不等于随机从半径取出，而是要平方后再开方
    const l = sqrt(random() * pow(radius, 2))
    const x: number = x_center + l * cos((angle / 180) * PI)
    const y: number = y_center + l * sin((angle / 180) * PI)
    return [x, y]
  }
}
