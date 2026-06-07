export {}
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring 
// "Look inside the person object, find the keys named firstName and lastName, and copy their values into two new variables."
let {firstName, lastName} = person;

console.log(firstName); // Outputs: "John"
console.log(lastName);  // Outputs: "Doe"   



