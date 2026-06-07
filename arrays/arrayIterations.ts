export {}

// Array iterations examples
const numbers = [45, 4, 9, 16, 25];

// forEach
numbers.forEach((value, index, array) => {
    console.log(`Index: ${index}, Value: ${value}`);
}
);
// Output:
// Index: 0, Value: 45
// Index: 1, Value: 4
// Index: 2, Value: 9
// Index: 3, Value: 16
// Index: 4, Value: 25

// Using forEach to log each element with its index in a function
function fucn(arr: number[]): void {
    arr.forEach((num, index) => {
        console.log(num + " at index " + index);
    }); 
}
// Calling the function
fucn(numbers);


// map
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [90, 8, 18, 32, 50]
// Using map to create an array of strings
const stringArray = numbers.map((num, index) => `Number: ${num} at index as ${index}`);
console.log(stringArray); 
// ["Number: 45 at index as 0", "Number: 4 at index as 1", "Number: 9 at index as 2", "Number: 16 at index as 3", "Number: 25 at index as 4"]         

// flatMap
const nestedNumbers = [1, 2, 3];
const flatMapped = nestedNumbers.flatMap(x => [x, x * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]  

// Using flatMap to split strings into characters
const words = ["Hello", "World"];
const characters = words.flatMap(word => word.split(''));
console.log(characters); // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']      


// filter The filter() method creates a new array with array elements that pass a test.
const filtered = numbers.filter(x => x > 10);
console.log(filtered); // [45, 16, 25]   

// Using filter to get even numbers
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // [4, 16]

// reduce The reduce() method executes a reducer function on each element of the array, resulting in a single output value.

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Initial value is 0 for accumulator
console.log(sum); // 99

// Using reduce to find the maximum value
const maxVal = numbers.reduce((max, curr) => (curr > max ? curr : max), numbers[0]);
console.log(maxVal); // 45


// reduceRight The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
const concatenatedString = ["H", "e", "l", "l", "o"].reduceRight((acc, curr) => acc + curr, '');
console.log(concatenatedString); // "olleH" 

// Using reduceRight to create a reversed array
const reversedArray = [1, 2, 3, 4, 5].reduceRight((acc, curr) => {
    acc.push(curr);
    return acc;
}, [] as number[]);
console.log(reversedArray); // [5, 4, 3, 2, 1]  


// some The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
const hasEvenNumber = numbers.some(x => x % 2 === 0);
console.log(hasEvenNumber); // true     


// every The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const allPositive = numbers.every(x => x > 0);
console.log(allPositive); // true           

// find The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
const firstLargeNumber = numbers.find(x => x > 20);
console.log(firstLargeNumber); // 45

// findIndex The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
const firstLargeNumberIndex = numbers.findIndex(x => x > 20);
console.log(firstLargeNumberIndex); // 0    

// indexOf The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const index = numbers.indexOf(16);
console.log(index); // 3        

// lastIndexOf The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards.
const lastIndex = [1, 2, 3, 2, 1].lastIndexOf(2);
console.log(lastIndex); // 3  

// includes The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const includesNine = numbers.includes(9);
console.log(includesNine); // true

const includesHundred = numbers.includes(100);
console.log(includesHundred); // false  

// from The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
const str = "Hello";
const charArray = Array.from(str);  // Converts string to array of characters. how Array.from() treats a string as an iterable (a collection of characters) and "translates" it into a real array.
console.log(charArray); // ['H', 'e', 'l', 'l', 'o']    


// of The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log(arrayOfNumbers); // [1, 2, 3, 4, 5] 

const arrayOfStrings = Array.of("Apple", "Banana", "Cherry");
console.log(arrayOfStrings); // ["Apple", "Banana", "Cherry"]

// isArray The Array.isArray() method determines whether the passed value is an Array.
console.log(Array.isArray([1, 2, 3]));          
// true
console.log(Array.isArray("Hello"));
// false
console.log(Array.isArray({name: "John", age: 30})); 
// false

// Keys The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const arrKeys = ['a', 'b', 'c'];
const keysIterator = arrKeys.keys();
for (const key of keysIterator) {
    console.log(key);
}   
// Output:
// 0
// 1
// 2    

// same using for loop 
for (let i = 0; i < arrKeys.length; i++) {
    console.log(i); // Prints: 0, 1, 2
}
// Output:
// 0
// 1
// 2    

// Values The values() method returns a new Array Iterator object that contains the values for each index in the array.
const arrValues = [10, 20, 30];
const valuesIterator = arrValues.values();  
for (const value of valuesIterator) {
    console.log(value);
}        

// Output:
// 10
// 20
// 30   

// Entries The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const arrEntries = ['x', 'y', 'z'];
const entriesIterator = arrEntries.entries();
for (const [index, value] of entriesIterator) {
    console.log(`Index: ${index}, Value: ${value}`);
}   

// Output:
// Index: 0, Value: x
// Index: 1, Value: y
// Index: 2, Value: z   

// same using for loop
for (let i = 0; i < arrEntries.length; i++) {
    console.log(`Index: ${i}, Value: ${arrEntries[i]}`);
}   

// Output:
// Index: 0, Value: x
// Index: 1, Value: y
// Index: 2, Value: z

// Object.entries to iterate over object properties
const user = { name: "Alice", role: "SDET" };

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: Alice
// role: SDET

// Keys values and entried in Arrays

const colors = ["Red", "Green", "Blue"];

// .keys() -> Just the indices
for (const key of colors.keys()) {
  console.log(key); // 0, 1, 2
}

// .values() -> Just the data
for (const val of colors.values()) {
  console.log(val); // "Red", "Green", "Blue"
}

// .entries() -> Both together as a pair [index, value]
for (const [key, val] of colors.entries()) {
  console.log(`${key}: ${val}`); // 0: Red, 1: Green, 2: Blue
}


// with  method 
const months = ["Januar", "Februar", "Mar", "April"];

// creating a new array with the third element changed to "March"
const myMonths = months.with(2, "March");   
console.log(myMonths); // ["Januar", "Februar", "March", "April"]

// Original array remains unchanged
console.log(months); // ["Januar", "Februar", "Mar", "April"]

// Using with to change multiple elements
const updatedMonths = months.with(0, "January").with(1, "February");
console.log(updatedMonths); // ["January", "February", "Mar", "April"]  

// Original array remains unchanged
console.log(months); // ["Januar", "Februar", "Mar", "April"]   

// Using with on an array of numbers
const nums = [10, 20, 30, 40, 50];
const newNums = nums.with(3, 100);  

console.log(newNums); // [10, 20, 30, 100, 50]
console.log(nums);    // [10, 20, 30, 40, 50]   
// Changing the last element
const changedLast = nums.with(nums.length - 1, 500);
console.log(changedLast); // [10, 20, 30, 40, 500]  


// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]


// Copying an array
const originalArray = [7, 8, 9];
const copiedArray = [...originalArray];
console.log(copiedArray); // [7, 8, 9]

// Converting a string to an array of characters
const str1 = "Hello";
const charArray1 = [...str];
console.log(charArray1); // ['H', 'e', 'l', 'l', 'o']


// Using spread operator to merge arrays and add new elements
// THE UNPACKER
const arrayA = [1, 2, 3];
const arrayB = [6, 7, 8];
const mergedArray = [0, ...arrayA, 4, 5, ...arrayB, 9];
console.log(mergedArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 

// Using spread operator to copy and modify an array
const originalNums = [10, 20, 30];
const modifiedNums = [...originalNums];

console.log(modifiedNums); // [10, 20, 30]
modifiedNums[1] = 200; // Changing the second element

console.log(modifiedNums); // [10, 200, 30]
console.log(originalNums); // [10, 20, 30]


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Des"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year); // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]

// Using spread operator to convert a Set to an Array
const mySet = new Set([1, 2, 3, 4, 5]);
const setToArray = [...mySet];
console.log(setToArray); // [1, 2, 3, 4, 5]

// Using spread operator to convert a Map to an Array of key-value pairs
const myMap = new Map<string, number>([
    ["a", 1],
    ["b", 2],   
    ["c", 3]
]);
const mapToArray = [...myMap];
console.log(mapToArray); // [["a", 1], ["b", 2], ["c", 3]]


// Using spread operator to pass array elements as function arguments
const numsForMax = [5, 10, 15, 20];
const maxNum = Math.max(...numsForMax);
console.log(maxNum); // 20
const minNum = Math.min(...numsForMax);
console.log(minNum); // 5


// Using spread operator to create a shallow copy of an array
const originalArr = [100, 200, 300];
const shallowCopyArr = [...originalArr];
console.log(shallowCopyArr); // [100, 200, 300] 
shallowCopyArr[0] = 999; // Modifying the copy
console.log(shallowCopyArr);    
// [999, 200, 300]
console.log(originalArr); 
// [100, 200, 300]      

// examples
const x = [45, 4, 9, 16, 25];
let y = x.every(myfunc);
function myfunc(val: number) {
  return val > 20;
}

console.log(y); // false

// REST operator examples The rest operator (...) allows us to destruct an array and collect the leftovers:
// THE PACKER

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]      


const [head, ...tail] = ["Apple", "Banana", "Cherry", "Date"];
console.log(head); // "Apple"
console.log(tail); // ["Banana", "Cherry", "Date"]  

// Using rest operator in function parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   
const total = sumAll(1, 2, 3, 4, 5);
console.log(total); // 15   










