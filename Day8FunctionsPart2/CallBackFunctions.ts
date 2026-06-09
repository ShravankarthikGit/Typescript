//A callback function : A function passed as an argument to another function and executed later. 
export {};

//Example 1:

// Function that takes callback function as an parameter
// callback function is executed after the main function is completed

// use => void inside the parameter parentheses because you are writing a type definition for a function, 
// not the return type of greet itself.In TypeScript, the arrow symbol => has two completely different meanings 
// depending on where you type it:

// Inside a Type Definition:  It separates a function's parameters from its return type.
// Inside Executable Code: It creates an arrow function value (() => {})

// calling callback fucnction with out type definition
function greet(name:string,callback:any)
{
    console.log(name);
    callback("Hello");  // executing the callback function
}

// calling a callback function with type definition
function greet1(name:string,callback:(message:string)=>void)
{
    console.log(name);
    callback("Hello");  // executing the callback function
}

//callback function
function showMessage(message:string)
{
    console.log(message);
}

//calling the function by passing the callback function
greet("John",showMessage); 


//Example2:

function sum(a:number,b:number,callback:(result:number)=>void)
{
    let result=a+b;
    callback(result);
}


//callback function
function displayResult(result:number):void
{
    console.log(result);
}


sum(10,20,displayResult); 