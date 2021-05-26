// Write a method to return all subsets of a set.

const subsets = (set = "") => {
  if (set.length <= 1) {
    return [set];
  }
  const first = set[0];
  const subset = subsets(set.substring(1));
  const anotherSubSet = subset.map(s => first + s);
  return [first, ...subset, ...anotherSubSet];
}

const solution = (set = "") => {
  return ["", ...subsets(set)].length - 1;
};

console.log(solution("abcdef"));