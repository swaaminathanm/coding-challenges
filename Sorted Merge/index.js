/*
You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B.
Write a method to merge B into A in sorted order.
 */

const sortedMerge = (A, B) => {
    let ai = A.length - B.length - 1;
    let bi = B.length - 1;
    let i = A.length - 1;
    while (i >= 0) {
        const a = A[ai];
        const b = B[bi];
        if (a !== undefined && a > b) {
            A[i] = a;
            ai--;
        } else if (b !== undefined) {
            A[i] = b;
            bi--;
        }
        i--;
    }
    return A;
}

console.log(sortedMerge([1,3,8, null, null, null], [2,4,6]));
console.log(sortedMerge([2,4,6, null, null, null], [1,3,8]));
console.log(sortedMerge([2,null, null, null], [1,3,8]));