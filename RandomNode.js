/*
Question:
You are implementing a binary tree class from scratch which, in addition to insert,
find and delete has a method getRandomNode which returns a random node from the tree.
All nodes should be equally likely to be chosen. Design and implement an algorithm for getRandomNode
and explain how you would implement the rest of the methods.
 */

class Node {
  constructor(left, right, val) {
    this.left = left;
    this.right = right;
    this.val = val;
  }

  getLeft() {
    return this.left;
  }

  setLeft(left) {
    this.left = left;
  }

  getRight() {
    return this.right;
  }

  setRight(right) {
    this.right = right;
  }

  getVal() {
    return this.val;
  }

  childrenCount() {
    let count = 0;
    if (this.left) count ++;
    if (this.right) count ++;
    return count;
  }

  isLeaf() {
    return this.childrenCount() === 0;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  find(val) {
    if (!this.root) {
      return null;
    } else {
      let currentNode = this.root;
      while (currentNode !== null) {
        if (val < currentNode.getVal()) {
          currentNode = currentNode.getLeft();
        } else if (val > currentNode.getLeft()) {
          currentNode = currentNode.getRight();
        } else {
          return currentNode;
        }
      }
    }
  }

  insert(val) {
    const node = new Node(null, null, val);
    if (!this.root) {
      this.root = node;
    } else {
      let currentNode = this.root;
      let immediateParentNode = currentNode;
      while (currentNode !== null) {
        immediateParentNode = currentNode;
        if (val < currentNode.getVal()) {
          currentNode = currentNode.getLeft();
        } else {
          currentNode = currentNode.getRight();
        }
      }

      if (val < immediateParentNode.getVal()) {
        immediateParentNode.setLeft(node);
      } else {
        immediateParentNode.setRight(node);
      }
    }

    this.size++;
  }

  getRandomNode() {
    const tempStack = [this.root];
    const totalIterations = 1 + Math.floor(Math.random() * this.size);
    let currentIteration = 0;
    let node;

    while (tempStack.length > 0 && (currentIteration < totalIterations)) {
      node = tempStack.shift();
      if (node.getLeft() !== null) tempStack.push(node.getLeft());
      if (node.getRight() !== null) tempStack.push(node.getRight());
      currentIteration++;
    }

    return node.getVal();
  }
}

const main = () => {
  const tree = new BinaryTree();
  tree.insert(8);
  tree.insert(6);
  tree.insert(10);
  tree.insert(4);
  tree.insert(7);
  tree.insert(9);
  tree.insert(12);
  tree.insert(2);
  tree.insert(14);

  const randomVal = tree.getRandomNode();
  console.log(`Random value ${randomVal}`);
}

main();