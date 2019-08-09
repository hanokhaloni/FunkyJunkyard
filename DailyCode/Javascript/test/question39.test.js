const question39 = require("../answers/question39");
const assert = require("assert");


var deadBoard = [
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]

describe("Question 39 : Game of life", function () {
  it("No life -> no change", () => {
    var board = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.']
    ]
    assert.notStrictEqual(question39.tick(board), deadBoard);
  });

  it("Any live cell with less than two live neighbours dies.", () => {
    var board = [
      ['.', '.', '.'],
      ['.', '*', '.'],
      ['.', '.', '.']
    ]
    assert.notStrictEqual(question39.tick(board), deadBoard);
  });

});