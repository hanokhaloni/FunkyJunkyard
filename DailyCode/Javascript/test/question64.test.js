const questionN = require("../answers/question64");
const assert = require("assert");

describe("Question 64 : knight tour", function () {
  it("has facts", () => {
    assert.equal(questionN.getKnightToursCount(1), 1); //TODO change to 1?
    assert.equal(questionN.getKnightToursCount(2), 0);
    assert.equal(questionN.getKnightToursCount(3), 0);
    assert.equal(questionN.getKnightToursCount(4), 0);
    //TODO this takea lot of time to run/...
    //This takes O(N * N) space and potentially O(8^(N^2)) time, since at each step we have potentially 8 moves to check, and we have to do this for each square.
    //assert.equal(questionN.getKnightToursCount(5), 1728);
    //assert.equal(questionN.getKnightToursCount(6), 1728);
  });
});