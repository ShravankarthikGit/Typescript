// Set iterations using for...of loop
export {};
const mySet = new Set<number>([10, 20, 30, 40, 50]);
for (const value of mySet) {
    console.log(value);
}

// Using forEach method
mySet.forEach((value) => {
    console.log(value);
});

// Using entries() method
for (const entry of mySet.entries()) {
    console.log(entry); // Output: [10, 10], [20, 20], ...
}

// Using keys() method
for (const key of mySet.keys()) {
    console.log(key); // Output: 10, 20, 30, 40, 50
}

// Using values() method    
for (const value of mySet.values()) {
    console.log(value); // Output: 10, 20, 30, 40, 50
}

// Using destructuring with entries()   
for (const [key, value] of mySet.entries()) {
    console.log(`Key: ${key}, Value: ${value}`); // Key: 10, Value: 10, ...
}

// — a Set has no numeric indices so for loop cant be directly used. Use one of these options.

// for loop using iterator
const it = mySet.values();
for (let i = 0; i < mySet.size; i++) {
    // print index using iterator
    console.log(`Print index on for loop: ${i}`);
    // Print values using iterator
    const v = it.next().value;
    console.log(`Print values using for loop with iterator: ${v}`);
}

// for..of loop 
for (const value of mySet) {
    console.log(`Print values using for..of loop: ${value}`);
}

// foreach loop 
mySet.forEach((value) => {
  console.log(`Print values using forEach: ${value}`);
});

// for in loop does not work with set in typescript
// for...in is designed to iterate over enumerable properties (keys) of an Object.
// Sets do not store data as enumerable properties; they store data internally in a hidden collection.
// Because a Set has no visible "keys," the for...in loop finds nothing to iterate over.

for (const index in mySet) {
    // console.log(`Print values using for in loop:${index}); // No output will error out
}

// while loop using iterator
const ite = mySet.values();
let cur;
while (!(cur = ite.next()).done){
    console.log(`Print values using while loop: ${cur.value}`);
}

// do..while loop using iterator
const itera = mySet.values();
let curr;
do {
    curr = itera.next();
    if (!curr.done) {
        console.log(`Print values using do..while loop: ${curr.value}`);
    }
} while (!curr.done);



// Using spread operator to convert Set to Array
const setToArray = [...mySet];
console.log(setToArray); // Output: [10, 20, 30, 40, 50]

// Using map on converted Array
setToArray.map((value) => {
    console.log(value);
});     

// Using filter on converted Array
const filteredArray = setToArray.filter((value) => value > 25);
console.log(filteredArray); // Output: [30, 40, 50]

// Using reduce on converted Array
const sum = setToArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 150

// Using Array.from to convert Set to Array
const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet); // Output: [10, 20, 30, 40, 50]  






