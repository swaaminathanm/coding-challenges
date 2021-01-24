const SYMBOL = "@";

const fillPattern = (array, row, col, count, towardsRightUp = true) => {
  let currentCol = col;
  let currentRow = row;

  if (towardsRightUp) {
    /*
    Fills the array from given row,col until count in the right - up fashion
    For eg,
          @
          @
          @
    @ @ @ @
     */
    for (let i = col; i < (col + count); i++) {
      currentCol = i;
      array[currentRow][currentCol] = SYMBOL;
    }
    for (let i = row; i > (row - count); i--) {
      currentRow = i;
      array[currentRow][currentCol] = SYMBOL;
    }
  } else {
    /*
    Fills the array from given row,col until count in the left - down fashion (inverted L)
    For eg,
    @ @ @ @
    @
    @
    @
     */
    for (let i = col; i > (col - count); i--) {
      currentCol = i;
      array[currentRow][currentCol] = SYMBOL;
    }
    for (let i = row; i < (row + count); i++) {
      currentRow = i;
      array[currentRow][currentCol] = SYMBOL;
    }
  }

  return {
    row: currentRow,
    col: currentCol
  }
};

const fill = (array, startingSymbolCount) => {
  let resultTemp;
  let currentRow = 0;
  let currentCol = 0;
  let currentSymbolCount = startingSymbolCount;
  // fill the initial left line
  for (let i = 0; i < startingSymbolCount; i++) {
    currentRow = i;
    array[currentRow][0] = SYMBOL;
  }
  // fill the remaining pattern (right up fashion or left down inverted L fashion)
  while (currentSymbolCount >= 3) {
    resultTemp = fillPattern(array, currentRow, currentCol, currentSymbolCount, true);
    currentRow = resultTemp.row;
    currentCol = resultTemp.col;
    currentSymbolCount -= 2;
    resultTemp = fillPattern(array, currentRow, currentCol, currentSymbolCount, false);
    currentRow = resultTemp.row;
    currentCol = resultTemp.col;
    currentSymbolCount -= 2;
  }
};

const print = (array) => {
  for (let i = 0; i < array.length; i++) {
    const col = array[i];
    let line = "";
    for (let j = 0; j < col.length; j++) {
      const val = array[i][j];
      if (val !== SYMBOL) {
        line += " ";
      } else {
        line += val;
      }
    }
    console.log(line);
  }
};

const count = 15;
const array = [];
for (let i = 0; i < count; i++) {
  array[i] = [];
  for (let j = 0; j < count; j++) {
    array[i][j] = "";
  }
}
fill(array, count);
print(array);