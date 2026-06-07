// using ANY //
let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.

let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(Math.round(v)); // no error as it can be "any" type

// using UNKNOWN //
let k: unknown = 1; // assigned a number 
k = "string"; // no error after assigned a String
console.log(k); // outputs: string

// In below line we will get error as we are trying to call a method that may not exist on the unknown type
// k.runANonExistentMethod(); 

// Define runANonExistentMethod method on k and then call the method

interface Philosopher {
  runANonExistentMethod: () => void;
}

k = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as Philosopher;

// Calling the method after casting k to Philosopher
(k as Philosopher).runANonExistentMethod();


// How can we avoid the error for the code commented out below when we don't know the type?

/* 
Breakdown of the Code
typeof k === 'object':
This is a JavaScript runtime check. In 2025, typeof still returns "object" for objects, arrays, and null.
k !== null:
This is a critical second check because, historically, typeof null erroneously returns "object" in JavaScript. Without this, the code might crash if k is null.
(k as { runANonExistentMethod: Function }):
Type Assertion: You are overriding TypeScript's safety. Since k passed the "is an object" check, you are telling the compiler to trust that it has a property named runANonExistentMethod which is a Function.
.runANonExistentMethod():
Because of the assertion above, TypeScript now allows you to call the method without an error.  */

if (typeof k === 'object' && k !== null && 'runANonExistentMethod' in k) {
  // TypeScript 2025 automatically knows k has this property here
  if (typeof k.runANonExistentMethod === 'function') {
     k.runANonExistentMethod();
  }
}

// using NEVER //
function throwError(message: string): never {
  throw new Error(message);
}

//calling the function
 //throwError("This is a fatal error"); // Uncommenting this line will terminate the program with an error


type PaymentMethod = "CreditCard" | "PayPal" | "Crypto";

function processPayment(method: PaymentMethod) {
  switch (method) {
    case "CreditCard":
      console.log("Processing card...");
      break;
    case "PayPal":
      console.log("Redirecting to PayPal...");
      break;
    case "Crypto":
      console.log("Verifying blockchain...");
      break;
    default:
      // This is the "Security Guard"
      // If you handle all cases above, 'method' is 'never' here.
      const _exhaustiveCheck: never = method;
      return _exhaustiveCheck;
  }
}

// Test the function with valid payment methods
processPayment("CreditCard");
processPayment("PayPal");
processPayment("Crypto");


// USING VOID ////
function logMessage(message: string): void {
  console.log(message);
    // ✅ No return statement needed
}

logMessage("This function returns nothing (void).");


// ❌ Error: Function lacks ending return statement
function add(a: number, b: number): number {
  const sum = a + b;
}

// ✅ Correct
function add1(a: number, b: number): number {
  return a + b;
}
console.log(add1(5, 10)); // Outputs: 15


// ❌ Error: Must return a value
function doNothing(): undefined {
  console.log("working...");
}

// ✅ Correct
function doNothing1(): undefined {
  console.log("working...");
  return undefined; 
}

doNothing1();

// USING NULL and UNDEFINED //
let u1: undefined = undefined;
let n1: null = null;

console.log(u1); // Outputs: undefined
console.log(n1); // Outputs: null

// Assigning null and undefined to other types
let num: number | null = null;  
let str: string | undefined = undefined;

console.log(num); // Outputs: null
console.log(str); // Outputs: undefined 

// Reassigning values
num = 42;
str = "Hello";  

console.log(num); // Outputs: 42
console.log(str); // Outputs: Hello 


