/*
Permutations with Dups: Write a method to compute all permutations of a string whose characters are not necessarily unique.
The list of permutations should not have duplicates.
 */

const permutation = (str) => {
  if (str.length <= 1) {
    return [str];
  }
  const result = [];
  const localMemo = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const left = str.slice(0, i);
    const right = str.slice(i + 1, str.length);
    const remaining = left + right;
    if (localMemo[remaining]) {
      continue;
    }
    const prevResult = permutation(remaining).map(s => {
      localMemo[s] = true;
      return char + s;
    });
    result.push(...prevResult);
  }
  return result;
}

console.log(permutation("abcc"));