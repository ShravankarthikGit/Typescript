// Boolean type examples //
let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type

// Output the values
console.log(isActive);
console.log(hasPermission);

// Below line demonstrates reassignment will throw an error if uncommented as reassignment is not allowed for let
isActive = false;
console.log("reassignment to isActive as " + isActive);

// Boolean type examples with coinstant
const test: boolean = true;
console.log(test);

// Test reasignmnet error
// test = false; // Error: Cannot assign to 'test' because it is a constant.

// Number type examples //
let decimal: number = 6;
let hex: number = 0xf00d;      // Hexadecimal
let binary: number = 0b1010;   // Binary
let octal: number = 0o744;     // Octal
let float: number = 3.14;      // Floating point

// Output the values
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
console.log(float);

// String type examples //
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

// Output the values
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);

// BigInt type examples (ES2020+) //
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax

// Output the values
console.log(bigNumber);
console.log(hugeNumber);

// Symbol type examples (ES2015+) //
const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"
