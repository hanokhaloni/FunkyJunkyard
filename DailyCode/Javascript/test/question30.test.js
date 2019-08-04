const question30 = require("../answers/question30");
const assert = require("assert");

describe("Question 30 : Water capacity", function () {
  it("[2, 1, 2] can hold 1 unit of water", () => {
    assert.equal(question30.getCapacity([2, 1, 2]), 1);
  });

  it("[2, 0, 2] can hold 2 unit of water", () => {
    assert.equal(question30.getCapacity([2, 0, 2]), 2);
  });


  it("[3, 0, 2] can hold 2 unit of water", () => {
    assert.equal(question30.getCapacity([3, 0, 2]), 2);
  });

  it("[1, 2, 3] can hold 0 unit of water", () => {
    assert.equal(question30.getCapacity([1, 2, 3]), 0);
  });

  it("[3, 0, 1, 3, 0, 5] can hold 8 unit of water", () => {
    assert.equal(question30.getCapacity([3, 0, 1, 3, 0, 5]), 8);
  });


});