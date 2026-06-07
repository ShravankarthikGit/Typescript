// Object constructors 
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
//It is considered good practice to name constructor functions with an upper-case first letter.
//In the constructor function, this has no value.
//The value of this will become the new object when a new object is created.

// In an object method, this refers to the object.

// this is not a variable.
// this is a keyword.
// You cannot change the value of this.



function Person(this: any, firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Creating an object using the Person constructor for javaScript
const person3 = new Person("David", "Johnson", 35);

console.log(person3.firstName); // Outputs: "David"
console.log(person3.lastName); // Outputs: "Johnson"
console.log(person3.age); // Outputs: 35

// Using 'as any' to bypass TypeScript constructor checks
const person4 = new (Person as any)("David", "Johnson", 35);

console.log(person4.firstName); // Outputs: "David"
console.log(person4.lastName); // Outputs: "Johnson"    
console.log(person4.age); // Outputs: 35


// Constructor function methods
function PersonOne(this: any, first: String, last: String, age: number, eyecolor: String) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

const personFive = new (PersonOne as any)("Sam", "Williams", 28, "brown");
console.log(personFive.fullName()); // Outputs: "Sam Williams"

// Adding methods to constructor prototype
function PersonTwo(this: any, first: String, last: String, age: number, eyecolor: String) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}   

// Adding fullName method to the prototype
PersonTwo.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

const personSix = new (PersonTwo as any)("Emma", "Brown", 32, "blue");
console.log(personSix.fullName()); // Outputs: "Emma Brown" 

// You can also add properties to the prototype
PersonTwo.prototype.nationality = "English";

const personSeven = new (PersonTwo as any)("Olivia", "Davis", 29, "green");
// Accessing the prototype property
console.log(personSeven .nationality); // Outputs: "English"
// Calling the prototype method
console.log(personSeven.fullName()); // Outputs: "Emma Brown" 


// Modifying prototype property
PersonTwo.prototype.nationality = "American";
console.log(personSeven.nationality); // Outputs: "American"

// Checking properties and methods
console.log(personSeven.hasOwnProperty("firstName")); // true
console.log(personSeven.hasOwnProperty("nationality")); // false (because it's on the prototype)
console.log("fullName" in personSeven); // true (method exists in prototype chain)  



