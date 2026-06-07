// Object
// An Object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// Objects can describe anything like houses, cars, people, animals, or any other subjects.


/* Objects are containers for Properties and Methods.
Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects.
Constructors are Object Prototypes.
 */

// You should declare objects with the const keyword.
// When an object is declared with const, you cannot later reassign it to point to a different variable.
// It does not make the object unchangeable. You can still modify its properties and values.


// Creating an Object
const person: { name: string; age: number; city: string } = {
    name: "John",
    age: 30,
    city: "New York"
};


// Accessing Object Properties
// Both dot notation and bracket notation can be used to access object properties.
console.log(person.name); // Outputs: "John"
console.log(person["name"]); // Outputs: "John"
console.log(person["age"]); // Outputs: 30  

person.city = "Los Angeles"; // Modifying property using dot notatio
console.log(person.city); // Outputs: "Los Angeles"
console.log(person); // Outputs: { name: "John", age: 30, city: "Los Angeles" }

(person as any).state = "California"; // Adding new property using dot notation
console.log(person.state); // Outputs: "California"
console.log(person); // Outputs: { name: "John", age: 30, city: "Los Angeles" }



// Create an Object and add new propertys
const personal = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// adding a new property
personal.nationality = "English";
console.log(personal);


// Create object using new keyword. new Object() is optional way to create object
const person1 = new Object();
person1.firstName = "Jane";
person1.lastName = "Doe";   
person1.age = 25;
person1.eyeColor = "green";
console.log("details of person1 object", person1);

// JavaScript Object Methods
const person2 = {
    firstName: "Alice",
    lastName: "Smith",  
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};
console.log(person2.fullName()); // Outputs: "Alice Smith"


// Display object properties
const persond  = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = persond.name + " is " + persond.age + " years old.";
console.log(text); // Outputs: "John is 30 years old."

// Looping through an Object
for (const key in persond) {
    console.log(key + ": " + (persond as any)[key]);
}


// Output:
// name: John
// age: 30
// city: New York

// Object with Nested Object
const personn = {
    name: "Charlie",
    age: 28,
    address: {
        street: "123 Main St",
        city: "Somewhere",
        country: "USA"
    }
};

console.log(personn.address.city); // Outputs: "Somewhere"

// Create a new object using an object
// Create new Object
const man = Object.create(person);
man.firstName = "Peter";

console.log(man.firstName); // Outputs: "Peter"
console.log     (man.age); // Outputs: 30 (inherited from person object)        
console.log(man); // Outputs: { firstName: "Peter" } (age is inherited)

// JavaScript Object fromEntries()
const fruitss = {
    apples: 300,
    pears: 900,
    bananas: 500
};
// Convert Object to Entries (Array of key-value pairs)
const fruits = Object.entries(fruitss);
console.log(fruits); 
// Output: [ [ 'apples', 300 ], [ 'pears', 900 ], [ 'bananas', 500 ] ]

// Convert Entries back to Object
const newFruits = Object.fromEntries(fruits);
console.log(newFruits); 
// Output: { apples: 300, pears: 900, bananas: 500 }

// javascript assign() method // The Object.assign() method copies properties from one or more source objects to a target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };  
const returnedTarget = Object.assign(target, source);

console.log(target);
// Output: { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// Output: { a: 1, b: 4, c: 5 }

