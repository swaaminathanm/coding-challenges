/*
Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array.
You may assume that the array was originally sorted in increasing order.

EXAMPLE
Input: find 5 in {15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14}
Output: 8 (the index of 5 in the array)
 */

const findIndex = (arr, start, end, val) => {
    let result = null;
    if (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === val) {
            result = mid;
        } else {
            result = findIndex(arr, start, mid - 1, val);
            if (!result) {
                result = findIndex(arr, mid + 1, end, val);
            }
        }
    }
    return result;
};

/*
Extension:
Find by how much an array has been rotated in O(lgn) time.
 */
const rotatedBy = (arr, start, end) => {
    if ((end - start + 1) < 2) {
        return start;
    } else if ((end - start + 1) === 2) {
        const ele1 = arr[start];
        const ele2 = arr[end];
        return ele1 > ele2 ? end : start;
    }
    let result = start;
    const mid = Math.floor((start + end) / 2);
    if (arr[start] > arr[mid]) {
        result = rotatedBy(arr, start, mid);
    } else if (arr[mid] > arr[end]) {
        result = rotatedBy(arr, mid, end);
    }
    return result;
}

const rotatedBySolution = (arr) => rotatedBy(arr, 0, arr.length - 1);

const solution = (arr, val) => findIndex(arr, 0, arr.length - 1, val);

// Tests
console.log(solution([], 10) === null);
console.log(solution([2, 3, 4, 5, 1], 10) === null);
console.log(solution([2, 3, 4, 5, 1], 5) === 3);
console.log(solution([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5) === 8);
console.log(solution([2,2,2,3,4,2], 2) === 2);
console.log(solution([2,2,2,3,4,2], 3) === 3);

// Extension Tests
console.log(rotatedBySolution([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]) === 5);
console.log(rotatedBySolution([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 13, 14]) === 5);
console.log(rotatedBySolution([1, 3, 4, 5, 7, 10, 14]) === 0);
console.log(rotatedBySolution([]) === 0);
console.log(rotatedBySolution([1]) === 0);


