/*
Problem Statement:

Given an nxn matrix and a variable K, find the kth largest number. The matrix is sorted in decreasing order by rows and columns.
sample_matrix = [
    [100, 97, 80, 72],
    [95, 80, 71, 63],
    [85, 70, 65, 50],
    [75, 69, 48, 40]
]
k: 3
output: 95
 */

const countGreaterOrEqualTo = (n, matrix, N) => {
    let count = 0;
    for (let  r = 0; r < N; r++) {
        let rowCount = N;
        let c = N - 1;
        while (n > matrix[r][c]) {
            rowCount--;
            c--;
        }
        count += rowCount;
    }
    return count;
}

const findKthLargest = (matrix, k, N) => {
    if (N <= 0) {
        return undefined;
    }
    let mid, high = matrix[0][0], low = matrix[N - 1][N - 1];
    let greaterOrEqualToCount;
    while (high >= low) {
        mid = Math.ceil(low + (high - low) / 2);
        greaterOrEqualToCount = countGreaterOrEqualTo(mid, matrix, N);
        if (k > greaterOrEqualToCount) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return mid;
};

// Tests
console.log(findKthLargest(
    [[]],
    0,
    0
) === undefined);

console.log(findKthLargest(
    [
        [1]
    ],
    1,
    1
) === 1);

console.log(findKthLargest(
    [
        [1]
    ],
    2,
    1
) === 1);

console.log(findKthLargest(
    [
        [100, 96, 80, 72],
        [95, 80, 71, 63],
        [85, 70, 65, 50],
        [75, 69, 48, 40]
    ],
    1,
    4
) === 100);

console.log(findKthLargest(
    [
        [100, 96, 80, 72],
        [95, 80, 71, 63],
        [85, 70, 65, 50],
        [75, 69, 48, 40]
    ],
    2,
    4
) === 97);

console.log(findKthLargest(
    [
        [100, 96, 80, 72],
        [95, 80, 71, 63],
        [85, 70, 65, 50],
        [75, 69, 48, 40]
    ],
    15,
    4
) === 48);

console.log(findKthLargest(
    [
        [100, 96, 80, 72],
        [95, 80, 71, 63],
        [85, 70, 65, 50],
        [75, 69, 48, 40]
    ],
    16,
    4
) === 40);