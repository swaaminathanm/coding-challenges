/*
Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can only move in two directions, right and down, but certain cells are "off limits" such that the robot cannot step on them.
Design an algorithm to find a path for the robot from the top left to the bottom right.
 */

const createCell = (r, c) => ({ r, c });

const nextRightCell = (cell) => {
  return { ...cell, c: cell.c + 1 }
}

const nextDownCell = (cell) => {
  return { ...cell, r: cell.r + 1 }
}

const isCellInvalid = (cell, grid) => {
  return cell.r < 0 || cell.r > grid.length - 1 || cell.c < 0 || cell.c > grid[0].length - 1 || grid[cell.r][cell.c] === 1;
}

const isEndCell = (cell, grid) => {
  return cell.r === grid.length - 1 && cell.c === grid[0].length - 1;
}

const traverse = (cell, grid) => {
  if (isCellInvalid(cell, grid)) {
    return [];
  }
  if (isEndCell(cell, grid)) {
    return [cell];
  }
  let result;
  let prevResult = traverse(nextDownCell(cell), grid);
  if (prevResult.length === 0) {
    prevResult = traverse(nextRightCell(cell), grid);
    result = prevResult.length > 0 ? [cell, ...prevResult] : [];
  } else {
    result = [cell, ...prevResult];
  }
  return result;
}

const createGrid = (R, C, offLimitCells) => {
  const grid = [];
  for (let r = 0; r < R; r++) {
    grid[r] = [];
    for (let c = 0; c < C; c++) {
      grid[r][c] = 0;
    }
  }
  offLimitCells.forEach((offLimitCell) => {
    grid[offLimitCell.r][offLimitCell.c] = 1;
  });
  return grid;
}

const solution = (R, C, offLimits) => {
  const offLimitCells = offLimits.map(cell => createCell(cell[0], cell[1]))
  const grid = createGrid(R, C, offLimitCells);
  const startCell = createCell(0, 0);
  return traverse(startCell, grid);
}

console.log(solution(6, 5, [[0,1], [1,1], [2,1], [3,1], [4,1]]));