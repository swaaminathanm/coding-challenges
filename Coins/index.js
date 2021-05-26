/*
Given an infinite number of quarters (25 cents), dimes (10 cents),
nickels (5 cents), and pennies (1 cent), write code to calculate the
number of ways of representing n cents.
 */

const permute = (n) => {
  const combinations = [];
  let quarters = 0, dimes = 0, nickels = 0;
  while ((25 * quarters) <= n) {
    while ((10 * dimes) <= n) {
      while ((5 * nickels) <= n) {
        const sum = (25 * quarters) + (10 * dimes) + (5 * nickels);
        const diff = n - sum;
        if (diff >= 0) {
          combinations.push([quarters, dimes, nickels, diff])
        }
        nickels++;
      }
      dimes++;
      // reset to defaults
      nickels = 0;
    }
    quarters++;
    // reset to defaults
    dimes = 0;
    nickels = 0;
  }
  return combinations;
}

// Tests
console.log(permute(0).length === 1);
console.log(permute(5).length === 2);
console.log(permute(10).length === 4);
console.log(permute(15).length === 6);
console.log(permute(20).length === 9);
console.log(permute(25).length === 13);