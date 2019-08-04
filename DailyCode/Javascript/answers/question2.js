// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function productExceptCurrentIndex_naive(numbers) {
  let product = 1;
  for (i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  let result = [];
  for (i = 0; i < numbers.length; i++) {
    result.push(product / numbers[i]);
  }
  return result;
}

function mutableRotateRight(arr) {
  arr.unshift(arr.pop());
  return arr;
}

function multiplyVectors(a, b) {
  let result = [];
  for (j = 0; j < a.length; j++) {
    result.push(a[j] * b[j]);
  }
  return result;
}

// IN
// 1 2 3 4

// OUT
// 2 3 4 1
// 3 4 1 2
// 4 1 2 3

function productExceptCurrentIndex(numbers) {
  let rotated = numbers;
  let result = Array(numbers.length).fill(1);
  for (i = 0; i < numbers.length - 1; i++) {
    rotated = mutableRotateRight(rotated);
    result = multiplyVectors(result, rotated);
  }
  return result;
}

if (typeof exports !== "undefined") {
  exports.productExceptCurrentIndex = productExceptCurrentIndex;
}