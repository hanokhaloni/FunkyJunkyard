const question3 = require("../answers/question3");
const assert = require("assert");



it("Should serialize", () => {
  var tree = new question3.TreeNode(
    "root",
    new question3.TreeNode("left", new question3.TreeNode("left.left", null, null), null),
    new question3.TreeNode("right", null, null)
  );

  var result = "";
  result = question3.serialize(tree);
  assert.equal(
    result,
    "root,left,left.left,null,null,null,right,null,null"
  );
});

it("Should be symmetric", () => {
  var tree = new question3.TreeNode(
    "root",
    new question3.TreeNode("left", new question3.TreeNode("left.left", null, null), null),
    new question3.TreeNode("right", null, null)
  );
  var result= question3.deserialize(question3.serialize(tree));

  assert.deepEqual(result, tree);
});
