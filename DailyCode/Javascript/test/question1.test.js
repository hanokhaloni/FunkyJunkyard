const question1 = require("../answers/question1");
const assert = require("assert");

describe("Question 1 : sum in array up to K", function () {
  it("[10, 15, 3, 7], k=17 is true because 10 + 7 = 17", () => {
    assert.equal(question1.areTwoNumbersAddUpToK([10, 15, 3, 7], 17), true);
  });

  it("[10, 15, 3, 7], k=18 is true because 15 + 3 = 18", () => {
    assert.equal(question1.areTwoNumbersAddUpToK([10, 15, 3, 7], 18), true);
  });

  it("[10, 15, 3, 7], k=25 is true because 15 + 10 = 25", () => {
    assert.equal(question1.areTwoNumbersAddUpToK([10, 15, 3, 7], 25), true);
  });

  it("[10, 15, 3, 7], k=26 is failse", () => {
    assert.equal(question1.areTwoNumbersAddUpToK([10, 15, 3, 7], 26), false);
  });
});