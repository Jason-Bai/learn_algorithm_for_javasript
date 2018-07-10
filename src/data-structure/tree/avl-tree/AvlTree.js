import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

export default class AvlTree extends BinarySearchTree {
  insert(value) {
    super.insert(value);

    let currentNode = this.root.find(value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }
  }

  remove(value) {
    throw new Error(`Can't remove ${value}. Remove method is not implement yet`);
  }

  balance(node) {
    // If balance factor is not Ok then try to balance the node.
    if (node.balanceFactor > 1) {
      // Left rotation
      if (node.left.balanceFactor > 0) {
        // Left-Left rotation
        this.rotateLeftLeft(node);
      } else {
        // Left-Right rotation
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor < -1) {
      // Right rotation
      if (node.right.balanceFactor < 0) {
        // Right-Right rotation
        this.rotateRightRight(node);
      } else {
        // Right-Left rotation
        this.rotateRightLeft(node);
      }
    }
  }

  rotateLeftLeft(rootNode) {
    // Detach left node from root node
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    // Make left node to be a child of rootNode's parent.
    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
    } else if (rootNode === this.root) {
      this.root = leftNode;
    }

    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }

    leftNode.setRight(rootNode);
  }

  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);

    leftRightNode.setLeft(leftNode);

    this.rotateLeftLeft(rootNode);
  }

  rotateRightLeft(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);
    rightLeftNode.setRight(rightNode);

    this.rotateRightRight(rootNode);
  }

  rotateRightRight(rootNode) {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
  }
}
