// Inverting a binary tree (Mirror Image)

const makeNode = (left, number, right) => {
  return {
    left,
    val: number,
    right
  }
}

const add = (node, number) => {
  if (!node) {
    return makeNode(null, number, null);
  } else if (number <= node.val) {
    node.left = add(node.left, number);
  } else {
    node.right = add(node.right, number);
  }
  return node;
}

const makeTree = (numbers = []) =>  numbers.reduce(add, null);

const mirrorImage = (node) => {
  if (!node) {
    return node;
  } else {
    return makeNode(
      mirrorImage(node.right),
      node.val,
      mirrorImage(node.left)
    )
  }
}

console.log(mirrorImage(makeTree([4,2,7,1,3,6,9])));

