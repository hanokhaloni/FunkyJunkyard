const question1 = require("../answers/question1");
const assert = require("assert");


it("[10, 15, 3, 7], 17 is true because 10 + 7 = 17", () => {
  assert.equal(question1.areTwoNumbersAddUpToK([10, 15, 3, 7], 17), true);
});


it("[10, 15, 3, 7], 18 is true because 15 + 3 = 18", () => {
  assert.equal(question1.areTwoNumbersAddUpToK([10, 15, 3, 7], 18), true);
});