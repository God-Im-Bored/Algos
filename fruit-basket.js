/*
--- Fruit Basket ---
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.


*/

const fruitCount = (string, k) => {
    let maxLength = 0
    let reference = {}
    let start = 0

    for (let end = 0; end < string.length; end++) {
        const rightChar = string[end]
        if (!(rightChar in reference)) {
            reference[rightChar] = 0
        }
        reference[rightChar] += 1
        while (Object.keys(reference).length > 2) {
            const leftChar = string[start]
            reference[leftChar] -= 1
            if (reference[leftChar] === 0) {
                delete reference[leftChar]
            }
            start += 1
        }
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

const fruit = ['A', 'B', 'C', 'B', 'B', 'C']
const k = 2
console.log(fruitCount(fruit, k))
