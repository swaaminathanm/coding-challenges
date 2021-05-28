/*
Sparse Search: Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.
EXAMPLE
Input: ball,{"at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""}
Output:4
 */

const findPivot = (arr, start, end) => {
    const pivot = Math.floor((start + end) / 2);
    let temp = pivot;
    while (arr[temp] === "" && temp < end) {
        temp++;
    }
    if (arr[temp] !== "") {
        return temp;
    }
    temp = pivot;
    while (arr[temp] === "" && temp > start) {
        temp--;
    }
    if (arr[temp] !== "") {
        return temp;
    }
    return -1;
}

const find = (arr, str, start, end) => {
    let result = -1;
    if (start <= end) {
        const pivot = findPivot(arr, start, end);
        if (pivot < 0) {
            result = -1;
        } else {
            const ele = arr[pivot];
            if (ele === str) {
                result = pivot;
            } else if (str < ele) {
                result = find(arr, str, start, pivot - 1);
            } else {
                result = find(arr, str, pivot + 1, end);
            }
        }
    }
    return result;
}

const solution = (arr, str) => find(arr, str, 0, arr.length - 1);

console.log(solution([], "") === -1);
console.log(solution(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "ball") === 4);
console.log(solution(["at", "", "", "", "ball", "", "", "", "", "", "", "", ""], "ball") === 4);
console.log(solution(["", "", "", "", "", "", "", "", "", "", "", "", ""], "ball") === -1);
console.log(solution(["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""], "nan") === -1);
