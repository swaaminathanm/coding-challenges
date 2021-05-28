/*
In an array of integers, a "peak" is an element which is greater than or equal to the adjacent integers and a "valley"
is an element which is less than or equal to the adjacent integers. For example,
in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {5, 2} are valleys.
Given an array of integers, sort the array into an alternating sequence of peaks and valleys.
EXAMPLE
Input: {5, 3, 1, 2, 3}
Output: {5, 1, 3, 2, 3}
 */

const isPeak = (arr, index) => {
    const prevI = index - 1;
    const nextIndex = index + 1;
    return (arr[prevI] === undefined || arr[prevI] <= arr[index]) && (arr[nextIndex] === undefined || arr[nextIndex] <= arr[index])
}

const isValley = (arr, index) => {
    const prevI = index - 1;
    const nextIndex = index + 1;
    return (arr[prevI] === undefined || arr[prevI] >= arr[index]) && (arr[nextIndex] === undefined || arr[nextIndex] >= arr[index])
}

const arrange = (arr, i) => {
    if (i >= arr.length) {
        return arr;
    }
    let swapIndex = i;
    if (swapIndex % 2 === 0) {
        // find peak
        while (swapIndex < arr.length && !isPeak(arr, swapIndex)) {
            swapIndex++;
        }
    } else {
        // find valley
        while (swapIndex < arr.length && !isValley(arr, swapIndex)) {
            swapIndex++;
        }
    }
    if (swapIndex < arr.length) {
        // peak/valley found
        // swap
        const temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
    }
    // move to the next element
    arrange(arr, i + 1);
}

const solution = (arr) => {
    arrange(arr, 0);
    return arr;
}

// Tests
console.log(JSON.stringify(solution([])) === JSON.stringify([]));
console.log(JSON.stringify(solution([1])) === JSON.stringify([1]));
console.log(JSON.stringify(solution([5, 3, 1, 2, 3])) === JSON.stringify([5, 1, 3, 2, 3]));
console.log(JSON.stringify(solution([5, 8, 6, 2, 3, 4, 6])) === JSON.stringify([8, 5, 6, 2, 6, 3, 4]));