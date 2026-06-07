export {}; // This fixes the redeclaration error

// JavaScript Array sort() Method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


// Sorting Numbers
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);  // Ascending order
console.log(numbers); // [1, 5, 10, 25, 40, 100]        


// Sorting an Array in Descending Order
const numbersDesc = [40, 100, 1, 5, 25, 10];
numbersDesc.sort((a, b) => b - a);  // Descending order     
console.log(numbersDesc); // [100, 40, 25, 10, 5, 1]


// Reverse an Array
const fruitsReverseSort = ["Banana", "Orange", "Apple", "Mango"];
fruitsReverseSort.reverse();
console.log(fruitsReverseSort); // ["Orange", "Mango", "Banana", "Apple"]


// reverse sort
fruitsReverseSort.sort().reverse();   
fruitsReverseSort.reverse();
console.log(fruitsReverseSort); // ["Orange", "Mango", "Banana", "Apple"]


// Sorting an Array of Objects
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 }
];
people.sort((a, b) => a.age - b.age); // Sort by age in ascending order
console.log(people); 
// [ { name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Bob", age: 35 } ]


// toSorted method (does not modify the original array)
const originalArray = [3, 1, 4, 1, 5, 9];
const sortedArray = originalArray.toSorted((a, b) => a - b);

console.log(originalArray); // [3, 1, 4, 1, 5, 9]
console.log(sortedArray);   // [1, 1, 3, 4, 5, 9]

// toReversed method (does not modify the original array)
const originalArrayRev = [1, 2, 3, 4, 5];
const reversedArray = originalArrayRev.toReversed();        

console.log(originalArrayRev); // [1, 2, 3, 4, 5]
console.log(reversedArray);    // [5, 4, 3, 2, 1]

// compare with splice which modifies the original array by removing elements
const arraySplice = [1, 2, 3, 4, 5];
const splicedArray = arraySplice.splice(0).reverse();   

console.log(arraySplice); // []
console.log(splicedArray); // [5, 4, 3, 2, 1]

// Sorting an Array of Strings with Locale Considerations
const items = ["réservé", "premier", "café", "adieu"];
items.sort((a, b) => a.localeCompare(b)); 
console.log(items); // ["adieu", "café", "premier", "réservé"]      

// Max and Min in an Array
const nums = [10, 5, 100, 2, 1000];
const max = Math.max(...nums);
const min = Math.min(...nums);

console.log(`Max: ${max}, Min: ${min}`); // Max: 1000, Min: 2


// Sorting Object Arrays by Multiple Properties
const employees = [
  { name: "John", age: 30, salary: 50000 },
  { name: "Jane", age: 25, salary: 60000 },
  { name: "Bob", age: 30, salary: 40000 },
  { name: "Alice", age: 25, salary: 70000 }
];   

employees.sort((a, b) => {
  if (a.age === b.age) {
    return a.salary - b.salary; // If ages are equal, sort by salary
  } 
    return a.age - b.age; // Otherwise, sort by age
});

console.log(employees);
// [
//   { name: "Jane", age: 25, salary: 60000 },
//   { name: "Alice", age: 25, salary: 70000 },
//   { name: "Bob", age: 30, salary: 40000 },
//   { name: "John", age: 30, salary: 50000 }
// ]

// Stable Array sort()
const stableArray = [
    { name: "apple", count: 2 },    
    { name: "banana", count: 1 },
    { name: "cherry", count: 2 },
    { name: "date", count: 1 }
];

stableArray.sort((a, b) => a.count - b.count);

console.log(stableArray);
// [
//   { name: "banana", count: 1 },
//   { name: "date", count: 1 },    
//   { name: "apple", count: 2 },
//   { name: "cherry", count: 2 }
// ]








