export {};

let arrayone: number[] = [];
//push() method adds one or more elements to the end of an array and returns the new length of the array.
arrayone.push(10);
arrayone.push(20, 30, 40);
console.log("Array one after push():", arrayone); //[ 10, 20, 30, 40 ]

// pop() method removes the last element from an array and returns that element. If the array is empty, it returns undefined.
let removedElement = arrayone.pop();
console.log("Array one after pop():", arrayone); //[ 10, 20, 30 ]
console.log("Removed element:", removedElement); // 40

// shift() method removes the first element from an array and returns that removed element. If the array is empty, it returns undefined.
let firstElement = arrayone.shift();
console.log("Array one after shift():", arrayone);
console.log("Removed first element:", firstElement); // 10

// 4. unshift() - Adds single/multiple elements to the beginning of an array
let fruits:string[] = ["apple", "banana", "orange"];
fruits.unshift("kiwi", "pear");
console.log("Fruits array after unshift():", fruits); //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

// 5. concat() - Combines two or more arrays of same type
let numarraone: Array<number> = [1, 2, 3];
let numarratwo: number[] = [4, 5, 6];

let combinedArray = numarraone.concat(numarratwo);
console.log("Combined array:", combinedArray); //[ 1, 2, 3, 4, 5, 6 ]


// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). 
// The original array will not be modified.
let slicedArray = fruits.slice(1, 4);
console.log("Sliced array:", slicedArray); //[ 'pear', 'apple', 'banana' ]
console.log("Original fruits array after slice():", fruits); //[ 'kiwi', 'pear', 'apple', 'banana', 'orange' ]

let slicedArray2 = fruits.slice(0, 4);
console.log("Sliced array 2:", slicedArray2); //[ 'kiwi', 'pear', 'apple', 'banana' ]

let slicedArray3 = fruits.slice(2, 5);
console.log("Sliced array 3:", slicedArray3); //[ 'apple', 'banana', 'orange' ]

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new 
// elements in place. It returns an array containing the deleted elements.

let animals:Array<string> = ["cat", "dog", "rabbit", "hamster"];

// Remove 1 element at index 2 and add "parrot" and "fish"
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
animals.splice(2,1, "parrot", "fish"); // rabbit removed and parrot, fish added at index 2
console.log("Animals array after splice():", animals); //[ 'cat', 'dog', 'parrot', 'fish', 'hamster' ]


//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
let indexOfDog = animals.indexOf("dog");
console.log("Index of 'dog':", indexOfDog); // 1

// toString() method returns a string representing the specified array and its elements.
let fruitsString = fruits.toString();
console.log("Fruits as string:", fruitsString); // kiwi,pear,apple,banana,orange

//includes
// includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let hasApple = fruits.includes("apple");
console.log("Does fruits array include 'apple'?", hasApple); // true

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); //[ 2, 4, 6 ]

