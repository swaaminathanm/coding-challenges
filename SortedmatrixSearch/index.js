/*
Given an M x N matrix in which each row and each column is sorted in ascending order, write a method to find an element.

sample_matrix = [
    [1, 2, 3, 4],
    [10, 11, 15, 17],
    [13, 14, 15, 50]
]
 */

const find = (matrix, M, N, val) => {
    let left = matrix[0][0];
    let right = matrix[M - 1][N - 1];
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (val === mid) {
            return val;
        } else if (val < mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(find(
    [[1]],
    1,
    1,
    1
) === 1)

console.log(find(
    [[1]],
    1,
    1,
    2
) === -1)

console.log(find(
    [
        [1, 2, 3, 4],
        [10, 11, 15, 17],
        [13, 14, 15, 50]
    ],
    3,
    4,
    11
) === 11)

console.log(find(
    [
        [1, 2, 3, 4],
        [10, 11, 15, 17],
        [13, 14, 15, 50]
    ],
    3,
    4,
    50
) === 50)

console.log(find(
    [
        [1, 2, 3, 4],
        [10, 11, 15, 17],
        [13, 14, 15, 50]
    ],
    3,
    4,
    1
) === 1)

console.log(find(
    [
        [1, 2, 3, 4],
        [10, 11, 15, 17],
        [13, 14, 15, 50]
    ],
    3,
    4,
    100
) === -1)