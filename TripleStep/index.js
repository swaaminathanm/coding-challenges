/*
Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
Implement a method to count how many possible ways the child can run up the stairs.
 */

const runs = (arr, memo = {}) => {
  const len = arr.length;
  let result = 0;
  if (len <= 1) {
    result = 1;
  } else {
    for (let i = 1; i < len && i <= 3; i++) {
      const newN = arr.slice(i, len);
      const memoResult = memo[newN.length];
      result += memoResult || runs(newN, memo);
    }
  }
  memo[len] = result;
  return result;
};

const solution = (n) => {
  const arr = [];
  for (let i = 0; i < (n + 1); i++) {
    arr.push(i);
  }
  return runs(arr);
}

console.log(solution(50));