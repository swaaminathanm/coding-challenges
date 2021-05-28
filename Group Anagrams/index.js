/*
Write a method to sort an array of strings so that all the anagrams are next to each other.
 */

const isAnagram = (str1, str2) => {
    return str1.split("").sort().join(',') === str2.split("").sort().join(',')
}

const solution = (arr) => {
    let anagramStart = 0;
    while (anagramStart < arr.length) {
        for (let i = anagramStart + 1; i < arr.length; i++) {
            if ((anagramStart < i) && isAnagram(arr[anagramStart], arr[i])) {
                const temp = arr[anagramStart + 1];
                arr[anagramStart + 1] = arr[i];
                arr[i] = temp;
                anagramStart++;
            }
        }
        anagramStart++;
    }
    return arr;
}

console.log(solution([]));
console.log(solution(["tar"]));
console.log(solution(["tar", "arc", "rat", "car", "art"]));
console.log(solution(["tar", "rat", "art"]));
console.log(solution(["tar", "arc", "cat"]));
console.log(solution(["tar", "rat", "car", "art"]));