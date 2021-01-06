/*
Question:
Given a deeply nested array create a function in the array, namely flatten that when invoked returns
a flat version of the original array
*/

const flattenRecursive = (array) => {
  const result = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flattenRecursive(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

Array.prototype.flatten = function() {
  return flattenRecursive(this);
};

const array = [
  1,
  2,
  3,
  [4],
  [5, 6, [7], [8, [9, [10]]]],
  11,
  12,
  13,
  [14, [[[[[15, [16]]]]]]],
  17,
  18,
  [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]]
];

const flattenedArray = array.flatten();
console.log(flattenedArray);

