// Remove duplicates from an array using filter and indexOf.
let originalSix = [1, 1, 2, 4, 5, 6]
const uniqueNumbers = new Set();
for (let num of originalSix) {
    uniqueNumbers.add(num)
}
console.log(uniqueNumbers)
console.log(`${[...uniqueNumbers]} unique numbers`)

// Syntax
// let newArray = array.filter((element, index, array) => expression);
let uniqueArray = originalSix.filter((num, index, originalSix) => {
    // Keep the number only if its first occurrence matches the current position index
    // Trick here is indexOf always looks from the beginning so in case a number is repeated in the array 
    // when we look for indexOf the number then it will return the initial index only 
    // which will not be equal to actual index of the number so === condition will fail. 
    return originalSix.indexOf(num) === index;
})
console.log(uniqueArray)

// Filter out even numbers from an array using filter.
let originalFour = [12, 8, 42, 16, 90, 5, 23, 7, 15, 3]
let evennum = originalFour.filter((num) => (num%2 === 0))
console.log("Even numbers:", evennum); 


// Find the sum of all numbers using reduce.
// let finalResult = array.reduce(function(accumulator, currentValue, currentIndex, array) {
// Return the updated result value to pass onto the next iteration step
//}, initialValue);

const totalsum = originalFour.reduce((sum, num) => {
    return sum = sum + num
}, 0)
console.log(`${totalsum} of numbers`)