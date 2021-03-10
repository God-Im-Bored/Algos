/*
-- Node Depths --

The distance between a node in a Binary Tree and the tree's root is called the node's depth.

Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.

Each Binary Tree node has an integer value, a left child node, and a right child node. Children nodes can either be a Binary Tree nodes themselves or None/null.



*/

function nodeDepths(root, counter = 0) {
    if (!root) return counter
    return counter + nodeDepths(root.left, counter + 1) + nodeDepths(root.right, counter + 1)


}

class BinaryTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}