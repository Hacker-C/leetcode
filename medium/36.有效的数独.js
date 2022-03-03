/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let hash = Array(10).fill(1) // 1-9
  let hash_col = Array(10).fill(1) // 1-9
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        continue
      }
      if (hash[board[i][j]] === 0) {
        return false
      } else {
        hash[board[i][j]] = 0
      }

    }
    hash.fill(1)
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[j][i] === '.') {
        continue
      }

      if (hash_col[board[j][i]] === 0) {
        return false
      } else {
        hash_col[board[j][i]] = 0
      }
    }
    hash_col.fill(1)
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      hash.fill(1)
      for (let m = 3 * i; m < 3 * i + 3; m++) {
        for (let n = 3 * j; n < 3 * j + 3; n++) {
          if (board[m][n] === '.') {
            continue
          }
          if (hash[board[m][n]] === 0) {
            return false
          } else {
            hash[board[m][n]] = 0
          }
        }
      }
    }
  }
  return true
};