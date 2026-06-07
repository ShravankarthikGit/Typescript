
//TypeScript is not truly type-safe at runtime. It only provides compile-time type safety.
//  Once the TypeScript code is compiled to JavaScript, all type information is removed, and the 
// resulting JavaScript code is dynamically typed. This means that while TypeScript can catch type errors during development, 
// it cannot prevent type-related issues at runtime. Therefore, it's important to use TypeScript's type system effectively 
// to minimize the chances of encountering runtime errors due to type mismatches.


// Static Typing in TypeScript

/* let x = 100;
// This will still work though we see compile time error because of the type inference of x as number.
x = "apple"; // Allowed (TypeScript infers x as 'any' type)
console.log(x); // Output: apple */


let y:number = 100;
y = 200; // Allowed
y = "banana"; // Error: Type 'string' is not assignable to type 'number'

console.log(y);

/// tsx Day3DataTypes\datatypes.ts   
// when we run the code using tsx it wil not throw error as internally tsx will conbvert the code to js and js is a dynamically typed
// language but we will get error in our code editor because of the static typing of typescript 
// which is a great feature to catch errors early in the development process.

/// npx tsc Day3DataTypes\datatypes.ts
// Error: Type 'string' is not assignable to type 'number'
// when we run the code using tsc it will throw error because tsc will compile the code to js and js is a dynamically typed
// language but we will get error in our code editor because of the static typing of typescript 
// which is a great feature to catch errors early in the development process.