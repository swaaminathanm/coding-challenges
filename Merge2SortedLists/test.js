const merge = require("./index");

describe("Merge Tests", () => {
  it ("should return empty list when 2 lists are empty", () => {
    expect(merge([], [])).toEqual([]);
  });

  it ("should return list 1 if list 2 is empty", () => {
    expect(merge([1,3,5], [])).toEqual([1,3,5]);
  });

  it ("should return list 2 if list 1 is empty", () => {
    expect(merge([], [2,6,7])).toEqual([2,6,7]);
  });

  it ("should merge 2 lists", () => {
    expect(merge([2,5,7,8], [3,4,5,9,12])).toEqual([2,3,4,5,7,8,9,12]);
    expect(merge([2,6,7,8], [3,4,5,9,12])).toEqual([2,3,4,5,6,7,8,9,12]);
    expect(merge([2,3,5,7], [1,4,5,6])).toEqual([1,2,3,4,5,6,7]);
  });
})