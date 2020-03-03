// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// eslint-disable-next-line no-unused-vars
function areTwoNumbersAddUpToK_naive(numbers, k) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] + numbers[j] === k) {
        return true;
      }
    }
  }
  return false;
}

//this version does it in one pass...
function areTwoNumbersAddUpToK(numbers, k) {
  var numbersSet = new Set();
  for (let i = 0; i < numbers.length; i++) {
    if (numbersSet.has(k - numbers[i])) {
      return true;
    }
    numbersSet.add(numbers[i]);
  }
  return false;
}

if (typeof exports !== "undefined") {
  exports.areTwoNumbersAddUpToK = areTwoNumbersAddUpToK;
}
