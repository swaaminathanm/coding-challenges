/*
Permutations without Dups: Write a method to compute all permutations of a string of unique characters.
 */

const permutation = (str) => {
  if (str.length <= 1) {
    return [str];
  }
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const left = str.slice(0, i);
    const right = str.slice(i + 1, str.length);
    const remaining = left + right;
    const prevResult = permutation(remaining).map(s => char + s);
    result.push(...prevResult);
  }
  return result;
}

console.log(permutation("abcdefgh"));