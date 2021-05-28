/*
Imagine you are reading in a stream of integers.Periodically,you wish to be able to look up the rank of a number
x (the number of values less than or equal to x). Implement the data structures and algorithms to support these operations.
That is, implement the method track (int x), which is called when each number is generated, and the method getRankOfNumber(int x),
which returns the number of values less than or equal to x (not including x itself).

EXAMPLE
Stream (in order of appearance): 5, 1, 4, 4, 5, 9, 7, 13, 3
getRankOfNumber(1) = 0
getRankOfNumber(3) = 1
getRankOfNumber(4) = 3
 */

const track = (x, node) => {
    if (node === null) {
        return {
            val: x,
            left: null,
            right: null,
            leftCount: 0
        };
    } else {
        if (x <= node.val) {
            node.left = track(x, node.left);
            node.leftCount++;
        } else {
            node.right = track(x, node.right);
        }
    }
    return node;
};

const getRankOfNumber = (x, node) => {
    let result;
    if (node.val === x) {
        result = node.leftCount;
    } else if (x <= node.val && node.left) {
        result = getRankOfNumber(x, node.left);
    } else if (node.right) {
        result = getRankOfNumber(x, node.right);
    } else {
        result = -1;
    }
    if (result !== -1 && node.val < x) {
        result += 1 + node.leftCount;
    }
    return result;
}

const solution = (arr, x) => {
    const tree = arr.reduce((node, ele) => track(ele, node), null);
    return getRankOfNumber(x, tree);
}

console.log(solution([5, 1, 4, 4, 5, 9, 7, 13, 3], 1) === 0);
console.log(solution([5, 1, 4, 4, 5, 9, 7, 13, 3], 3) === 1);
console.log(solution([5, 1, 4, 4, 5, 9, 7, 13, 3], 4) === 3);
console.log(solution([5, 1, 4, 4, 5, 9, 7, 13, 3], 13) === 8);
console.log(solution([5, 1, 4, 4, 5, 9, 7, 13, 3], 10) === -1);
