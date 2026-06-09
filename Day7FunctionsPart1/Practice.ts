export {};

// Named function
function namedfunction(value: string): string {
    console.log("This is a named function");    
    return "Hello, " + value + "!";
}

//invoke
namedfunction("Alice");

////
function addnumbers(a: number, b: number): number {
    console.log(`Adding ${a} and ${b} is ${a + b}`);
    return a + b;
}

// Extra argument will be ignored and will not cause an error in run time, but it will cause a compile-time error in TypeScript
addnumbers(5, 3, 8);


//// accepts multiple mumbers and returns their sum
// function resfunction(...nums: any[]): number  --> accepts data of type any, but we can specify it to be number to ensure type safety
function resfunction(...nums: number[]): number {
    let sum:number = 0;
    for (let i:number = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

resfunction(1, 2, 3, 4, 5);


// function with multiple parameters of different data types 
function multifunction(...elements:(number | string | boolean)[]) {
    return elements;
}

console.log(multifunction(3,"john",2,1,"scott", true, false)); //7
console.log(multifunction(10,20,30,40,50,60,70)); //7
console.log(multifunction("abc","xyz")); //


//Fucntrion with optional parameters
// in here age is an optional parameter, which means that it may or may not be provided when the function is called. 
// If age is not provided, it will be undefined within the function.
// The function will return the name regardless of whether the age is provided or not.
function optionalFunction(name: string, age?: number): string {
    if (age) {  
        console.log(`Name: ${name}, Age: ${age}`);
    }
    else{
        console.log(`Name: ${name}, Age: Not provided`);
        //console.log(age); //undefined
    }
    return name;
}

optionalFunction("Alice", 30);
optionalFunction("Bob");

// fucntion with default parameters
// In this function, if the caller does not provide a value for the rate parameter, it will default to 0.50. 
// This means that if you call calculateDiscount(100), it will use the default rate of 0.50 and calculate the discount accordingly.
function calculateDiscount(amount: number, rate: number = 0.50): number {   
    let discount: number = amount * rate;
    return discount;
}


//// Anonymous function 
let app = function (num: number){
    console.log("The number is: ", num);
}

app(5);

let multiply = function (a: number, b: number): number {
    return a * b;
}

console.log(multiply(4, 5));
multiply(4, 5);  // this will not print result because we are not logging it, we need to log the result to see the output in console


(function (a: number, b: number): number {
    return a * b;
})(4, 5); // this will not print result because we are not logging it, we need to log the result to see the output in console

// IIFE with logging the result
console.log((function (a: number, b: number): number {
    return a * b;
})(4, 5)); // this will print 20 in console


// Arrow/lambda function
// syntax: (parameters) => expression
let addsum = (a: number, b:number) => a+b;
console.log(addsum(10, 20)); //30

// In below we did provide return statement as we have expression in curly braces, if we have expression without curly braces 
// then we don't need to provide return statement as it will be implicit return
let addsum2 = (a: number, b:number) => 
{
    return a+b;
}

console.log(addsum2(10, 20)); //30

let personaldetails =(name:string, age: number, email?: string) => console.log(`${name} is ${age} years old and email is ${email ? email : "not provided"}`);
personaldetails("Alice", 30, "alice@example.com");
personaldetails("Bob", 25);


let details = (name: string, age: number = 30, email?: string) => 
{
    console.log(`${name} is ${age} years old and email is ${email ? email : "not provided"}`);
}

details("Charlie")
