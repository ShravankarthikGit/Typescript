// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.
// Unlike an Array, you cannot access a specific item in a Set using bracket notation like mySet[0] because Sets are not indexed.
// Instead, you can iterate through the items in a Set using a for..of loop or convert the Set to an Array if you need indexed access.
// Sets are useful when you want to store a collection of unique items and need to perform operations like union, intersection, and difference.

// Create a Set
const mySet = new Set(); // Create an empty Set with no values and data type

// Create set with type 
const numberSet: Set<number> = new Set(); // Create an empty Set that only accepts numbers

const roles = new Set<string>(); // Create an empty Set that only accepts strings
roles.add("a");
roles.add("b");
roles.add("c");

console.log(roles); // Output: Set { 'a', 'b', 'c' }

// Add Values of different types o the Set
mySet.add(1);         // Add number 1 to the Set
mySet.add("Hello");   // Add string "Hello" to the Set
mySet.add({ name: "John" }); // Add object { name: "John" } to the Set  
console.log(mySet); // Output: Set { 1, 'Hello', { name: 'John' } }

// Note: Even if you try to add the same object again, it will be considered a different object because objects are reference types.
// Duplicate primitive values are ignored in a Set, but duplicate objects are not.
mySet.add({ name: "John" }); 

console.log(mySet); // Output: Set { 1, 'Hello', { name: 'John' }, { name: 'John' } }   

// list elements of the Set using for..of loop
for (const item of mySet) {
    console.log(`items from set are ${item}`);
}   

