// Array methoids type definitions and implementations

// Example: Getting the length of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;

let fruit = fruits.at(2);
console.log(fruit); // "Apple"

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1); // ["Banana", "Orange", "Apple", "Mango"]

// Note that changing the length property of an array changes the array itself
fruits1.length = 2;
console.log(fruits1); // ["Banana", "Orange"]

// JavaScript Array toString() Method
let myList = fruits.toString();
console.log(myList); // "Banana,Orange,Apple,Mango"

// JavaScript Array join() Method
let myList1 = fruits.join(" * ");
console.log(myList1); // "Banana * Orange * Apple * Mango"

// Popping and Pushing
fruits.push("Kiwi"); // adds new element to the end of array
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

fruits.pop(); // removes last element from array
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]  


// JavaScript Array shift() Method
fruits.shift(); // removes first element from array
console.log(fruits); // ["Orange", "Apple", "Mango"]    

// JavaScript Array unshift() Method
// adds new element to the beginning of array
fruits.unshift("Lemon");
console.log(fruits); // ["Lemon", "Orange", "Apple", "Mango"]


// JavaScript Array splice() Method
// adds new items to an array
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); // ["Lemon", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]


// Remove duplicates
const names = ["Alice", "Bob", "Alice", "Charlie"];
// Standard way to get unique values in 2025. We are suing set to remove duplicates
// Note that uniqueNames will be an array of strings
const uniqueNames = [...new Set(names)]; 
console.log(uniqueNames); // ["Alice", "Bob", "Charlie"]

// Function to check for duplicates in an array
// (arr: any[]): boolean: This is a TypeScript arrow function. It accepts an array of any type and promises to return a true/false value.
// In here we are using Set to check for duplicates. If the size of the Set (which only stores unique values) is different from the length of the original array, it means there were duplicates.
const hasDuplicates = (arr: any[]): boolean => {
  return new Set(arr).size !== arr.length;
};


// Changing Elements
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss[0] = "Kiwi";
console.log(fruitss); // ["Kiwi", "Orange", "Apple", "Mango"]    

// Array.isArray()
console.log(Array.isArray(fruitss)); // true


// JavaScript Array concat() Method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren); // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// Merging three arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildrenall = arr1.concat(arr2, arr3);

console.log(myChildrenall); // ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]


// copy withg in same array
const fruitsCopyWithin = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsCopyWithin.copyWithin(2, 0, 2); // copies to index 2 the items starting from index 0 to index 2 (not included)
console.log(fruitsCopyWithin); // ["Banana", "Orange", "Banana", "Orange", "Kiwi"]  


// JavaScript Array fill() Method
const fruitsFill = ["Banana", "Orange", "Apple", "Mango"];
fruitsFill.fill("Kiwi", 2, 4); // fills the array with "Kiwi" from index 2 to index 4 (not included)
console.log(fruitsFill); // ["Banana", "Orange", "Kiwi", "Kiwi"]    

// JavaScript Array reverse() Method
const fruitsReverse = ["Banana", "Orange", "Apple", "Mango"];
fruitsReverse.reverse();
console.log(fruitsReverse); // ["Mango", "Apple", "Orange", "Banana"]

// JavaScript Array sort() Method
const fruitsSort = ["Banana", "Orange", "Apple", "Mango"];
fruitsSort.sort();
console.log(fruitsSort); // ["Apple", "Banana", "Mango", "Orange"]

// Flattening an Array
// Flattening an array is the process of reducing the dimensionality of an array.
// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

console.log(newArr); // [1, 2, 3, 4, 5, 6]

// You can also specify the depth to which you want to flatten the array
const myArrDeep = [1, 2, [3, 4, [5, 6]]];
const newArrDeep = myArrDeep.flat(2);       
console.log(newArrDeep); // [1, 2, 3, 4, 5, 6]

// flatmapping

/* 
Step-by-Step Logic
    If this function is running inside a loop (like .map() or .flatMap()) on the number 1:
    Input: x becomes 1.
    First element: The first item in the new array is x, which is 1.
    Second element: The second item is x * 2, which is 2.
 */


const myArrFlatMap = [1, 2, 3, 4];
const newArrFlatMap = myArrFlatMap.flatMap(x => [x, x * 2]);    
console.log(newArrFlatMap); // [1, 2, 2, 4, 3, 6, 4, 8]     



// Splice and Slice
const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
fruitsSplice.splice(2, 0, "Lemon", "Kiwi"); // adds new items to an array at index 2 and removes 0 items
console.log(fruitsSplice); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]       

const citrus = fruitsSplice.slice(1, 3); // slices out a piece of an array
console.log(citrus); // ["Orange", "Lemon"]

// JavaScript Array indexOf() Method
const fruitsIndexOf = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let position = fruitsIndexOf.indexOf("Apple"); 
console.log(position); // 2

// JavaScript Array lastIndexOf() Method
let lastPosition = fruitsIndexOf.lastIndexOf("Apple"); 
console.log(lastPosition); // 4


