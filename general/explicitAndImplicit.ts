// Explicit type annotations //

// String
let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];


// Function with explicit parameter and return types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
// greet(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'


// IMPLICIT type annotations //

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score: number;
score = 768787; // Valid reassignment
score = "gfdg"; // Error: Type 'string' is not assignable to type 'number'

// Declaration
let score1: number 
//assignment
score1 = 100;
// reassignment
score1 = 768787; // Valid reassignment

let bill = 3.14; // TypeScript infers 'number'

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
  return a + b;
}

// Log the values to see them in the output
console.log(username);
console.log(score);
console.log(flags);
console.log(add(5, 3));
console.log(add(5.1, 3.8));


// Object Type Inference Example

// TypeScript infers the shape of the object
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true
};

// TypeScript knows these properties exist
console.log(user.name);   // OK
// console.log(user.email); // Error: Property 'email' does not exist


// TypeScript infers the shape of the object
const user1 = {
name: "Alice",
age: 30,
isAdmin: true
};

// TypeScript knows these properties exist
console.log(user1.name);  // OK
//console.log(user1.email); // Error: Property 'email' does not exist

//Type Mismatch Errors
let killa: string = "alice";
killa = 42; // Error: Type 'number' is not assignable to type 'string'


let scorew = 100;  // TypeScript infers 'number'
scorew = "high";  // Error: Type 'string' is not assignable to type 'number'

// When TypeScript Can't Infer Types
// Variables declared without initialization
let something;  // Type is 'any'
something = 'hello';
something = 42;  // No error