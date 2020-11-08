const findGreatestAndSmallest = require("./findGreatestAndSmallest");

describe("findGreatestAndSmallest function tests", () => {
  it("should return [min, max] output for given array", () => {
    let arr;

    arr = [2,3,6,7,7,9,11,12,12];
    expect(findGreatestAndSmallest(arr, 9)).toEqual([7, 11]);

    arr = [2,3,6,7,7,9,11,12,12];
    expect(findGreatestAndSmallest(arr, 12)).toEqual([11, 12]);

    arr = [2,3,6,7,7,9,11,12,12];
    expect(findGreatestAndSmallest(arr, 2)).toEqual([2, 3]);
  });
});