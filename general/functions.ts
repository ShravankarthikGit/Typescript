export {}

// Using function
// functions are defined with the function keyword.

function functionName(x: String) {
  // code to be executed
}

//example with function name as myFunction
function myFunction(a: number, b: number) {return a * b;}
myFunction(4, 3); // returns 12


// Function expression
// A function expression can be stored in a variable:
const x = function (a: number, b: number) {return a * b};

x(4, 3); // returns 12

// Function constructor
// A function can also be defined with the Function constructor:
const myFunction2 = new Function("a", "b", "return a * b");
myFunction2(4, 3); // returns 12    

// Global and Local Variables
// Variables defined outside a function are global variables and can be accessed from anywhere in the code.
let carName = "Volvo"; // global variable
// local variables in function 
// carName is a local variable created inside the function.
function myFunction3() {
  let carName = "Volvo"; // local variable
}

// Parameters and Arguments
// Parameters are the names listed in the function definition.
// Arguments are the real values passed to (and received by) the function.

function myFunction4(a: number, b: number) { // a and b are parameters
  return a * b;   // The function returns the product of a and b
}

myFunction4(4, 3); // 12  (4 and 3 are arguments)

// Default Parameters
// In 2025, default parameters are widely supported in TypeScript and JavaScript. 
// They allow you to set default values for function parameters if no value or undefined is passed.
function myFunction5(x: number = 1, y: number = 1): number {
  return x + y;
}   

myFunction5();        // returns 2 (1 + 1)
myFunction5(5);     // returns 6 (5 + 1)
myFunction5(5, 2);  // returns 7 (5 + 2)    


function myFunctiont ( x, y) {  // x and y are parameters with type as any
    return x + y;
}

myFunctiont(5, 10); // returns 15
myFunctiont("Hello, ", "world!"); // returns "Hello, world!"

// sum of all numbers in an array using rest parameter
function sumAll(...num: number[]): number {
    let x = 0
    for (let i = 0; i < num.length; i++) {
        x = x + num[i];
    }
    return x
}

sumAll(1, 2, 3);           // returns 6
sumAll(1, 2, 3, 4, 5);     // returns 15
sumAll(10, 20, 30, 40);    // returns 100

// max of all numbers in an array using rest parameter
function maxAll(...num: number[]): number {
    let max = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    return max
}

maxAll(1, 2, 3);           // returns 3
maxAll(1, 2, 3, 4, 5);     // returns 5
maxAll(10, 20, 30, 40);    // returns 40    


// Rest Parameters
// In 2025, rest parameters are a standard feature in TypeScript and JavaScript. 
// They allow functions to accept an indefinite number of arguments as an array.
function myFunction6(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}   

myFunction6(1, 2, 3);           // returns 6
myFunction6(1, 2, 3, 4, 5);     // returns 15
myFunction6(10, 20, 30, 40);    // returns 100


// function expression stored in a variable
// A function expression is a function assigned to a variable.
// A function expression is a way of defining a function within an expression, rather than as a standalone declaration.
// A function expression can be assigned to a variable, passed as an argument to another function, or returned from a function.

// Use functions as variables. Note that the function is defined without a name.
let z = function(a: number, b: number) {return a * b;};
let text = "Result of the function " + z(4, 3);
console.log(text); // Result of the function 12


// Function declarations are "hoisted" to the top of their scope. This means you can call a function before it is defined in the code:
console.log(myFunction7(5, 3)); // Outputs: 8

function myFunction7(a: number, b: number): number {
  return a + b;
}

// Function expressions are not hoisted. You must define the function before you can call it:
// console.log(myFunction8(5, 3)); // This would cause an error

const myFunction8 = function(a: number, b: number): number {
  return a + b;
}

console.log(myFunction8(5, 3)); // Outputs: 8



