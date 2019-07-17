// Here's your coding interview problem for today.

// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// solution

const arr = [10, 15, 3, 7];
const k = 17;

const addUpTo = (arr, k) => arr.some((x, i) => !isNaN(arr.find((y, j) => i !== j && y === k - x)));
console.log(addUpTo(arr, k));