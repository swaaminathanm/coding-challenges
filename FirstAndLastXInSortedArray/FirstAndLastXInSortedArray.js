/*
Find the first and last X in the given sorted array

Example:
Input:
X=8
[2,3,6,7,7,8,8,8,12]

Output: [5, 7]

If X not found:
Output: [-1, -1]
 */

const search = (arr, x) => {
  const binarySearch = (startIndex, endIndex) => {
    if (startIndex > endIndex || endIndex < startIndex) {
      return -1;
    }

    const pivotIndex = startIndex + Math.floor(Math.abs(startIndex - endIndex) / 2);
    const pivotElement = arr[pivotIndex];
    if (x === pivotElement) {
      return pivotIndex;
    } else if (x < pivotElement) {
      return binarySearch(startIndex, pivotIndex - 1);
    } else {
      return binarySearch(pivotIndex + 1, endIndex);
    }
  };

  return binarySearch(0, arr.length - 1);
};

const findFirstAndLastX = (arr, x) => {
  const _findFirstX = (arr, endIndex) => {
    let indexOfX = search(arr.slice(0, endIndex + 1), x);
    if (indexOfX === -1) {
      return -1;
    }
    const tempIndex = _findFirstX(arr, indexOfX - 1);
    if (tempIndex !== -1) indexOfX = tempIndex;
    return indexOfX;
  };

  const _findLastX = (arr, startIndex) => {
    let indexOfX = search(arr.slice(startIndex, arr.length), x);
    if (indexOfX === -1) {
      return -1;
    }
    indexOfX += startIndex;
    const tempIndex = _findLastX(arr, indexOfX + 1);
    if (tempIndex !== -1) indexOfX = tempIndex;
    return indexOfX;
  };

  const indexOfX = search(arr, x);
  const result = [];

  if (indexOfX === -1) {
    result.push(-1);
    result.push(-1);
  } else {
    const firstIndexOfX = _findFirstX(arr, indexOfX - 1);
    const lastIndexOfX = _findLastX(arr, indexOfX + 1);
    result.push(firstIndexOfX === -1 ? indexOfX : firstIndexOfX);
    result.push(lastIndexOfX === -1 ? indexOfX : lastIndexOfX);
  }

  return result;
};

module.exports = {
  search,
  findFirstAndLastX
}

// Runtime of this algorithm is O(log n) + 2(O(log^2 n))