export {} // make this file a module to avoid global name collisions
// declare an array
const arrayTest = []; // now inferred to type any[]

const arrayTest2: number[] = []; // explicitly declared as number array

const arrayTest3 = new Array<string>(); // explicitly declared as string array

// Type Inference 
const arrayTest4: string[] = []; // inferred to type string[]

// JavaScript Array Constants
// It does NOT define a constant array. It defines a constant reference to an array.
// JavaScript const variables must be assigned a value when they are declared:
// Meaning: An array declared with const must be initialized when it is declared.

const carsList = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// Const Block Scope
const carslist2 = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"


// Array declared with Var type
var carslist3 = ["Saab", "Volvo", "BMW"];
// Here carslist3[0] is "Saab"
{
  var carslist3 = ["Toyota", "Volvo", "BMW"];
  // Here carslist3[0] is "Toyota"
}
// Here carslist3[0] is "Toyota"


const names: string[] = []; // inferred to type string[]
names.push("Dylan"); // no error
names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const cars = []; // inferred to type any[]
cars.push("Toyota"); // no error
cars.push(42); // no error, but cars is of type any[]
console.log(cars);

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


// Using Read only 
const names1: readonly string[] = ["Dylan"];
names1.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Mixed type array
const mixed: (string | number)[] = ["Apple", 5, "Orange", 10];
mixed.push("Banana"); // no error
mixed.push(20); // no error
mixed.push(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.


// Using Array generic type
const cars1 = new Array("Saab", "Volvo", "BMW");
cars[0] = "Audi"; // no error
console.log(cars1);

// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Outputs: "Banana,Orange,Apple,Mango"


// Arrays are Objects
const person = ["John", "Doe", 46];
// Accessing Array Elements
console.log(person[0]); // Outputs: "John"

const person1 = {firstName:"John", lastName:"Doe", age:46};
console.log(typeof person1); // Outputs: "object"   
console.log(Array.isArray(person1)); // Outputs: false

//acessing object properties
console.log(person1.firstName); // Outputs: "John"

// Array Length
const points = [40];
console.log(points.length); // Outputs: 1

const points1 = new Array(40);
console.log(points1.length); // Outputs: 40


// looping through an array
const letters = ["a", "b", "c", "d"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}       

for (const letter of letters) {
  console.log(letter);
}           

letters.forEach((letter) => {
  console.log(letter);
});     

// example with async/await
async function clickAllButtons(elements: ElementHandle[]) {
  for (const element of elements) {
    await element.click(); // Waits for click 1 before starting click 2
  }
}


// Nested Arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];      

// Accessing elements meaning row 2, column 3
console.log(matrix[1][2]); // Outputs: 6

// Jagged Arrays
const jaggedArray: number[][] = [
  [1, 2],
  [3, 4, 5],
  [6]
];

console.log(jaggedArray[1][2]); // Outputs: 5


// Checking for Duplicates in an Array
const hasDuplicate = (arr: any[]): boolean => {
  return new Set(arr).size !== arr.length;
};  
console.log(hasDuplicate([1, 2, 3, 4])); // Outputs: false
console.log(hasDuplicate([1, 2, 3, 4, 4])); // Outputs: true
console.log(hasDuplicate(["apple", "banana", "orange"])); // Outputs: false


// ARRAY SEARCH //
const array = [5, 12, 8, 130, 44];

// Find first and last elements in array 
const first = array[0];
const last = array.at(-1);
console.log(first); // Outputs: 5
console.log(last); // Outputs: 44

// find returns the first element that satisfies the condition
const found = array.find(element => element > 10); // find returns the first element that satisfies the condition
console.log(found); // Outputs: 12

// findlast returns the last element that satisfies the condition
const array1 = [5, 12, 50, 130, 44];
const foundLast = array1.findLast(element => element > 10);
console.log(foundLast); // Outputs: 44

// findIndex returns the index of the first element that satisfies the condition
const foundIndex = array.findIndex(element => element > 10);
console.log(foundIndex); // Outputs: 1      

// Last Index of an Element
// lastIndexOf returns the index of the last occurrence of an element in an array
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
const lastIndex = animals.lastIndexOf("Dodo");
const lastIndexNo = animals.lastIndexOf("gdfgdfg"); // element not found
console.log(lastIndex); // Outputs: 3
console.log(lastIndexNo); // Outputs: -1

const numbers1 = [5, 12, 50, 130, 44, 130];
const lastIndex1 = numbers1.lastIndexOf(130);
console.log(lastIndex1); // Outputs: 5

// findLastIndex returns the index of the last element that satisfies the condition
const foundLastIndex = animals.findLastIndex((word) => word.startsWith('P'));
console.log(foundLastIndex); // Outputs: 2

const foundLastIndexNum = numbers1.findLastIndex(num=> num);
console.log(foundLastIndexNum); // Outputs: 2

// findLast returns the last element that satisfies the condition
const foundLastAnimal = animals.findLast(element => element === "Tiger");
console.log(foundLastAnimal); // Outputs: Tiger


// Option A: Using forEach
fruits.forEach((value, index) => {
  console.log(`Index ${index} has value: ${value}`);
});

fruits.forEach((value) => {
  console.log(`value: ${value}`); // if index is not needed
});

// Option B: Using map
fruits.map((value, index) => {
  console.log(`Index ${index} has value: ${value}`);
});


// for loop 
const browsers: string[] = ["Chrome", "Firefox", "Edge"];
for (const browser of browsers) {
  console.log(browser);
}


// [index, value] is called destructuring
for (const [index, value] of fruits.entries()) {
  console.log(`Index ${index}: ${value}`);
}



