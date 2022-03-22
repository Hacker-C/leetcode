/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let AAA =
    colors.match(/[A]{3,}/g)?.reduce((pre, cur) => pre + cur.length - 2, 0) ?? 0
  let BBB =
    colors.match(/[B]{3,}/g)?.reduce((pre, cur) => pre + cur.length - 2, 0) ?? 0
  return AAA > BBB
}

winnerOfGame('AAABABB')
