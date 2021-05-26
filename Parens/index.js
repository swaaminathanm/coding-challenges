/*
Implement an algorithm to print all valid (e.g., properly opened and closed) combinations of n pairs of parentheses.
EXAMPLE
Input: 3
Output: ((())), (()()), (())(), ()(()), ()()()
 */

const isValid = (paren) => {
  const stack = [];
  for (let i = 0; i < paren.length; i++) {
    const ele = paren[i];
    if (ele === "(") stack.push(ele);
    else stack.pop();
  }
  return stack.length === 0;
};

const permute = (paren) => {
  if (paren.length === 1) {
    return [paren];
  }
  const localCache = new Set();
  let result = [];
  for (let i = 0; i < paren.length; i++) {
    const char = paren[i];
    const left = paren.slice(0, i);
    const right = paren.slice(i + 1, paren.length);
    const remaining = left + right;
    const key = char + remaining;
    if (localCache.has(key)) {
      continue;
    } else {
      localCache.add(key);
    }
    const prevResult = permute(remaining).map((ele) => char + ele);
    result = result.concat(prevResult);
  }
  return result;
};

const generateParan = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "("
  }
  for (let i = 0; i < n; i++) {
    str += ")"
  }
  return str;
}

const solution = (n) => {
  const paren = generateParan(n);
  const parens = permute(paren);
  const result = parens.filter(isValid);
  return result;
}

console.log(solution(10));