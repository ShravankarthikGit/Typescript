
export{}
//Arrow functions were introduced in ES6.
// Arrow functions must be defined before they are used.
//Arrow functions allow us to write shorter function syntax:

// With out arrow function :
let myFunction = function(a: number, b: number) {return a * b}

// With arrow function:
let myArrowFunction = (a: number, b: number) => a * b;

// Basic syntax
//The general structure is: const name = (params: type): returnType => { logic };

// Explicitly typed arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// Shorthand (Implicit return) - No braces needed for single-line logic
const multiply = (a: number, b: number): number => a * b;

// Arrow function with default parameter
const greet = (name: string = "Guest"): string => `Hello, ${name}!`;

// Arrow function with rest parameters
// The three dots (...) tell TypeScript: "Take all the remaining individual arguments passed to this function and bundle them into an array named numbers."
// In 2025, the syntax ...numbers: number[] is known as a Rest Parameter. It allows a function to accept an indefinite number of arguments as a single, typed array.
// A rest parameter must be the final parameter in the function's list. You cannot have another parameter after it.

/* 
// reduce() Method Explanation
In 2025, the .reduce() method remains the most versatile array tool in TypeScript and JavaScript. 
It iterates through an array and uses a callback function to combine its elements into a single output value, such as a number, object, or new array.

*/
const array = [1, 2, 3, 4];
const initialValue = 0;

const result = array.reduce((accumulator, current, index, array) => {
  // Logic here
  return accumulator; 
}, initialValue);

/*
acc (Accumulator): This is like a "running total." It carries the result from the previous step over to the next one.
curr (Current Value): This is the specific item the loop is currently looking at in the array.
index (Optional): The index of the current element (0, 1, 2...).
array (Optional): The entire array being processed.
0 (Initial Value): This is the starting point. The very first time the loop runs, acc will be 0.
*/

/* 
"Rest" vs. "Spread"
It is easy to confuse the two because they both use ...
Rest (this example): Gathers individual items into an array. Used in function parameters.
Spread: Breaks an array out into individual items. Used when calling a function or merging objects. 
*/

const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};      
 

const myNumbers = [1, 2, 3];
console.log("using spread  " + sumAll(...myNumbers)); // Using 'Spread' to pass the array into a 'Rest' parameter

// Example usage of sumAll function
console.log(sumAll(1, 2, 3, 4)); // 10


// Example usage
console.log(add(5, 3)); // 8
console.log(multiply(4, 2)); // 8

console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"


// Example using index and array parameters
const numbers = [10, 20, 30];
const detailedSum = numbers.reduce((acc, curr, index, array) => {
  console.log(`Index: ${index}, Current Value: ${curr}, Array: [${array}]`);
  return acc + curr;
}, 0);      

console.log(`Total Sum: ${detailedSum}`); // Total Sum: 60



