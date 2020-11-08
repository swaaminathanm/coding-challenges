const { search, findFirstAndLastX } = require("./FirstAndLastXInSortedArray");

describe("search function tests", () => {
  it("should return -1 if given value is not found in array", () => {
    let array;

    array = [2,3,6,7,7,8,8,8,12];
    expect(search(array, 13)).toBe(-1);

    array = [2,3,6,7,7,8,8,8,12];
    expect(search(array, 4)).toBe(-1);

    array = [2];
    expect(search(array, 13)).toBe(-1);
  });

  it("should return element index if given value is found in array", () =>{
    let array;

    array = [2,3,6,7,7,8,8,8,12];
    expect(search(array, 8)).toBe(6);

    array = [2,3,6,7,7,8,8,8,12];
    expect(search(array, 3)).toBe(1);

    array = [2];
    expect(search(array, 2)).toBe(0);
  });

  it("should return -1 if array is empty", () => {
    let array;

    array = [];
    expect(search(array, 8)).toBe(-1);
  });
});

describe("findFirstAndLastX function tests", () => {
  it("should return [-1, -1] if given value is not found in array", () => {
    let array;

    array = [2,3,6,7,7,8,8,8,12];
    expect(findFirstAndLastX(array, 13)).toEqual([-1, -1]);

    array = [2];
    expect(findFirstAndLastX(array, 13)).toEqual([-1, -1]);

    array = [];
    expect(findFirstAndLastX(array, 13)).toEqual([-1, -1]);
  });

  it("should return first and last index if value is present in the array", () => {
    let array;

    array = [8,8,8,8,8,8,8,8,12];
    expect(findFirstAndLastX(array, 8)).toEqual([0, 7]);

    array = [2,3,6,7,7,8,8,8,12];
    expect(findFirstAndLastX(array, 8)).toEqual([5, 7]);

    array = [2,3,6,7,7,8,8,8,12];
    expect(findFirstAndLastX(array, 7)).toEqual([3, 4]);

    array = [2];
    expect(findFirstAndLastX(array, 2)).toEqual([0, 0]);

    array = [2, 5];
    expect(findFirstAndLastX(array, 5)).toEqual([1, 1]);

    array = [5 ,5, 5, 5, 5];
    expect(findFirstAndLastX(array, 5)).toEqual([0, 4]);
  });
});