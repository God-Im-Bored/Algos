/*
-- Find Closest Value in BST --

Write a function that takes in a Binary Search Tree (BST) and a target integet value and returns the closest value to that target value contained in the BST.

Assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node.

*/

class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function findValue(tree, target) {
    return findClosestHelper(tree, target, tree.value)
}

function findClosestHelper(tree, target, closest) {
    if (tree === null) return closest
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    if (target < tree.value) {
        return findClosestHelper(tree.left, target, closest)
    } else if (target > tree.value) {
        return findClosestHelper(tree.right, target, closest)
    } else {
        return closest
    }
}


console.log(findValue(tree, target))