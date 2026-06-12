export {};

// For each

let fruits:string[] = ["apple","banana","orange","pear","jackfruit"]

fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase())
});

fruits.forEach((fruit, index) => {
    console.log(`fruit nbame is ${fruit} and fruit index is ${index}`)
});


// 2. map() - Creates a new array with the result of calling the function on every element of an array
// It Takes function as a parameter.
// Returns the same number of elements that we have in original array.
// Syntax: array.map(function(currentValue, index, array){})

let newnum:number[] = [3,9,4,9,7,1,6,8]
let modarray = newnum.map((num) => {
    return (num = num+1)
}) 

console.log(modarray)

// 3. filter()
//Ex1: Get the only even numbers from an array
let evennum = newnum.filter((num) => {
    if (num%2 === 0){
        return num
    }
})

console.log(evennum)

// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})
// accumulator - The accumulated value from previous iteration
// currentValue - The current element being processed

//Ex1: Get the total (sum) of all the elements in an array

let sumarray = newnum.reduce((total, num) => {
        total = total + num
        return total
})

console.log(sumarray)

let total:number = 0;
for (let num of newnum){
    total = total + num;
}

console.log(total)


// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})

// check for vowels
let word:string = "aeiou"
let wordarray = word.split("");
// console.log("original array is " + wordarray)

let result: boolean = wordarray.some((char) =>{
    let vowels:string[] = ['a','e','i','o','u']
    if (vowels.includes(char)){
        return true;
    }
    return false
})

console.log(result)


// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})

let resultone: boolean = wordarray.some((char) =>{
    let vowels:string[] = ['a','e','i','o','u']
    if (vowels.includes(char)){
        return true;
    }
    return false
})

console.log(result)
