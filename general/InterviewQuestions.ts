export {};

// Interview Question: Find the Minimum and Maximum Values in an Array
// Classic For loop 
const numbers = [3, 5, 1, 8, 2, 7];

let minVal = numbers[0];
let maxVal = numbers[0];

for (const num of numbers) {
    if (num < minVal) minVal = num;
    if (num > maxVal) maxVal = num;
}

console.log(`Min: ${minVal}, Max: ${maxVal}`);

// Using reduce to find Maximum
const min = numbers.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
}, numbers[0]);
console.log(min); // Outputs: 1

// Using reduce to find Minimum
const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(max); // Outputs: 8 

// Using Math.min and Math.max with Spread Operator
const minUsingMath = Math.min(...numbers);
const maxUsingMath = Math.max(...numbers);  

console.log(`Min using Math: ${minUsingMath}, Max using Math: ${maxUsingMath}`);

// Using Sort to find Minimum and Maximum
const sortedNumbers = [...numbers].sort((a, b) => a - b);
const minSorted = sortedNumbers[0];
const maxSorted = sortedNumbers[sortedNumbers.length - 1];
console.log(`Min using Sort: ${minSorted}, Max using Sort: ${maxSorted}`);
// Note: Sorting modifies the array, so we use the spread operator to create a copy before sorting.

// Interview Question: Remove Duplicates from an Array
const arrayWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
// Using Set
const removeDuplicates = (arr: any[]): any[] => {
    return Array.from(new Set(arr));
}   
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Outputs: [1, 2, 3, 4, 5]   


// Using filter and indexOf
const removeDuplicatesFilter = (arr: any[]): any[] => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
const uniqueArrayFilter = removeDuplicatesFilter(arrayWithDuplicates);
console.log(uniqueArrayFilter); // Outputs: [1, 2, 3, 4, 5]

// Using reduce
const removeDuplicatesReduce = (arr: any[]): any[] => {
    return arr.reduce((acc, curr) => {  
        if (!acc.includes(curr)) {
            acc.push(curr);
        }   
        return acc;         
    }, [] as any[]);
}
const uniqueArrayReduce = removeDuplicatesReduce(arrayWithDuplicates);
console.log(uniqueArrayReduce); // Outputs: [1, 2, 3, 4, 5]


// Interview Question: Flatten a Nested Array
const nestedArray = [1, [2, [3, 4], 5], 6];
// Using flat with depth
const flattenArray = (arr: any[], depth: number = 1): any[] => {  // Default depth is 1. depth indicates how deep a nested array structure should be flattened.
    return arr.flat(depth);
}   
const flattened = flattenArray(nestedArray, 1); // Flattening with depth 1
console.log(flattened); // Outputs: [1, 2, [3, 4], 5, 6]

const flattened2 = flattenArray(nestedArray, 2); // Flattening with depth 2
console.log(flattened2); // Outputs: [1, 2, 3, 4, 5, 6]


