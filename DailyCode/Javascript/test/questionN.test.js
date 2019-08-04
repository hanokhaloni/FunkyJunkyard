const questionN = require("../answers/questionN");
const assert = require("assert");

describe("Question N : is method returnin true", function () {
  it("Should be true", () => {
    assert.equal(questionN.IsMehodTrue(), true);
  });
});