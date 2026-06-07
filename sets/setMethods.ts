/* 
Basic Set Methods
new Set()
add()
clear()
delete()
entries()
forEach()
has()
keys()
values()

Set Properties
size */

export {}
// The new Set() Method
const mySet = new Set(); // Create an empty Set
const mySet2 = new Set<String>() // Create an empty Set that only accepts strings

const letters = new Set(["a","b","c"]); // Create a Set with initial values

console.log(letters); // Output: Set { 'a', 'b', 'c' }

// The add() Method
letters.add("d"); // Add a new value to the Set
console.log(letters); // Output: Set { 'a', 'b', 'c', 'd' }

letters.add("a"); // Try to add a duplicate value
console.log(letters); // Output: Set { 'a', 'b', 'c', 'd' } - duplicate is ignored

// Below we see warning but it works because we are adding a number to a Set of strings
// TypeScript is just a layer on top of JavaScript. When you run your code, TypeScript is removed (transpiled), leaving behind plain JavaScript.
// JavaScript is dynamically typed: 
// It doesn't care if a Set contains both strings ('a') and numbers (1).
// The Warning: The red squiggly or terminal warning is TypeScript telling you: "Hey, you initialized this Set with only strings, so I assumed it should ONLY have strings". 

letters.add(1); // Add a number to the Set
console.log(letters); // Output: Set { 'a', 'b', 'c', 'd', 1 }

// Recommended way to have both strings and numbers in a Set in Typescript
const mixedSet = new Set<String | number>();

mixedSet.add("a");
mixedSet.add(1);
console.log(mixedSet); // Output: Set { 'a', 1 }


// Size Property
console.log(`Size of letters set: ${letters.size}`); // Output: Size of letters set: 5

// The delete() Method
letters.delete("b"); // Remove value "b" from the Set
console.log(letters); // Output: Set { 'a', 'c', 'd', 1 }

// The has() Method
console.log(letters.has("a")); // Output: true
console.log(letters.has("b")); // Output: false     
console.log(letters.has(1)); // Output: true

// The clear() Method
letters.clear(); // Remove all values from the Set
console.log(letters); // Output: Set {}      


// The forEach() Method
const numSet = new Set([1, 2, 3, 4, 5]);
numSet.forEach((value) => {
    console.log(`Value from numSet: ${value}`);
});
// Output:
// Value from numSet: 1
// Value from numSet: 2
// Value from numSet: 3
// Value from numSet: 4
// Value from numSet: 5

// Keys values and entries Methods
// In a Set, there are no indices. To keep the API consistent, keys and values are identical.

const ids = new Set([101, 102]);

// .keys() -> Returns the values (since there are no real keys)
for (const key of ids.keys()) {
  console.log(key); // 101, 102
}

// .values() -> Returns the values
for (const val of ids.values()) {
  console.log(val); // 101, 102
}

// .entries() -> Returns [value, value] // entry means a pair (key and value)
for (const [key, val] of ids.entries()) {
  console.log(`Key: ${key}, Value: ${val}`); // Key: 101, Value: 101
}

