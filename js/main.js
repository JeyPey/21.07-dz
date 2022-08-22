// 1. Use an Array to Store a Collection of Data

let yourArray = ['dog', true, false, 4, null];
console.log(yourArray);

// 2. Access an Array's Contents Using Bracket Notation

let myArray = ["a", "b", "c", "d"];
myArray[1] = "it's not b";

console.log(myArray);

// 3. Add Items to an Array with push() and unshift()

function mixedNumbers(arr) {
    const numberArray = arr;

    numberArray.unshift('I', 2, 'three');
    numberArray.push(7, 'VIII', 9);

    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));

// 4. Remove Items from an Array with pop() and shift()

function popShift(arr) {
    let popped = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

// 5. Remove Items Using splice()

const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(0, 2 && 5, 2);

console.log(arr);

// 6. Add Items Using splice()

// 7. Copy Array Items Using slice()

// 8. Copy an Array with the Spread Operator

// 9. Combine Arrays with the Spread Operator

// 10. Check For The Presence of an Element With indexOf()

// 11. Iterate Through All an Array's Items Using For Loops

// 12. Create complex multi-dimensional arrays

// 13. Add Key-Value Pairs to JavaScript Objects

// 14. Modify an Object Nested Within an Object

// 15. Access Property Names with Bracket Notation

// 16. Use the delete Keyword to Remove Object Properties

// 17. Check if an Object has a Property

// 18. Iterate Through the Keys of an Object with a for...in Statement

// 19. Iterate Through the Keys of an Object with a for...in Statement

// 20. Modify an Array Stored in an Object