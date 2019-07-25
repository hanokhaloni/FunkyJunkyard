//Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function deserialize(str) {
  var array = str.split(',');
  return arrayToTree(array);
}

function arrayToTree(array) {
  if (array[0] == "null")
    return null;
  var value = array[0];
  var restOfArray = array.slice(1);
  let leftNode = arrayToTree(restOfArray);
  let rightNode = arrayToTree(restOfArray);
  
  return new TreeNode(value, leftNode, rightNode);
}

function serialize(node) {
  if (node == null) {
    return "null";
  }
  return node.value + "," + serialize(node.left) + "," + serialize(node.right);
}


if (typeof exports !== "undefined") {
  exports.TreeNode = TreeNode;
  exports.serialize = serialize;
  exports.deserialize = deserialize;
}
