const question1 = require("../answers/question2");
const assert = require("assert");


it("for [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]", () => {
  assert.deepEqual(question1.productExceptCurrentIndex([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
});

it("for [3, 2, 1], the expected output would be [2, 3, 6]", () => {
  assert.deepEqual(question1.productExceptCurrentIndex([3, 2, 1]), [2, 3, 6]);
});
