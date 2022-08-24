type 字符串 = string
type 数字 = number
const 绝对值 = Math.abs
const 数字化 = Number

function fractionAddition(表达式: 字符串): 字符串 {
  const 计算最大公因数 = (a: 数字, b: 数字): 数字 => {
    return b == 0 ? a : 计算最大公因数(b, a % b)
  }
  const 分母积 = 表达式.match(/\/\d{1,2}/g).reduce((前一项, 当前项) => 前一项 * +当前项.slice(1), 1)
  const 所有分数数组 = 表达式.match(/[+-]{0,1}\d{1,2}\/\d{1,2}/g)
  const 分子和 = 所有分数数组.reduce((前一项, 当前项) => {
    const [分子, 分母] = 当前项.split('/').map(数字化)
    const 单项计算结果 = (分母积 / 分母) * 分子
    return 前一项 + 单项计算结果
  }, 0)
  const 最大公因数: 数字 = 计算最大公因数(分子和, 分母积)
  return (
    (分子和 * 分母积 < 0 ? '-' : '') +
    `${绝对值(分子和 / 最大公因数)}/${绝对值(分母积 / 最大公因数)}`
  )
}

console.log(fractionAddition('-7/3+5/2-3/10'))
