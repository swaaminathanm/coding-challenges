/*
Find the nearest smallest and largest number to X in a sorted array

Example:
Input:
X=9
[2,3,6,7,7,9,11,12,12]

Output: [7, 12]
 */

const search = (arr, x, startIndex, endIndex) => {
  if (startIndex > endIndex || endIndex < startIndex) {
    return -1;
  }
  let pivotIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  let tempIndex = pivotIndex;
  const pivotElement = arr[pivotIndex];
  if (x < pivotElement) {
    tempIndex = search(arr, x, startIndex, pivotIndex - 1);
  } else if (x > pivotElement) {
    tempIndex = search(arr, x, pivotIndex + 1, endIndex);
  }
  if (tempIndex === -1) tempIndex = pivotIndex;
  return tempIndex;
};

const findGreatestAndSmallest = (arr, X) => {
  const indexOfX = search(arr, X, 0, arr.length - 1);
  const minSmallestIndex = search(arr, X - 1, 0, indexOfX - 1);
  const minGreatestIndex = search(arr, X + 1, indexOfX + 1, arr.length - 1);

  const minSmallestValue = minSmallestIndex < 0 ? arr[0] : arr[minSmallestIndex];
  const minGreatestValue = minGreatestIndex >= arr.length ? arr[arr.length - 1] : arr[minGreatestIndex];

  return [minSmallestValue, minGreatestValue];
};

module.exports = findGreatestAndSmallest;