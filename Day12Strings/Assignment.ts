

function arrayPush(){
    let original:number[] = [3,8,9,7]
    //Add an element to the end of an array using push.
    original.push(10)
    console.log(`${original} after push`)

    //Remove the last element from an array using pop.
    original.pop();
    console.log(`${original} after pop`)

    //Remove the first element from an array using shift.
    original.shift();
    console.log(`${original} after shift`)

    //Add elements at the beginning of an array using unshift.
    original.unshift(12,13,19);
    console.log(`${original} after unshift`)

    //Concatenate two arrays using concat.
    let secondorig:number[] = [7,9,0,7,8,87]
    let concted = original.concat(secondorig)
    console.log(`${concted} after concatenation`)

    //Extract a subarray using slice. slice 
    // suntax for slice: array.slice(start, end)
    let slicedarray = concted.slice(1,4)
    console.log(`${slicedarray} after slicing`)
    console.log(`${concted} - original array after slicing`)

    // Create duplicate using slice
    const duplicate = concted.slice(); // Output: [10, 20, 30, 40, 50]
    console.log(`${duplicate} duplicate array concted`)

    //Grab last 2 elements from array using slice 
    let lasttwo = concted.slice(-2); 
    console.log(`${lasttwo} array with last 2 elements`)

    // Syntax for splice: array.splice(start, deleteCount, item1, item2, ..., itemN)
    // item1, item2.. will be added to array

    //Insert and delete elements using splice.
    let originaltwo = [3,4,5,5,66,66,77,8,8,8,9,9,9,]
    console.log(`${originaltwo} original array`)
    // INSERT WITHOUT DELETE
    // note that we are starting at index 1 and 0 says no deletions
    // after 0 we pass eleemnets to be inserted 
    originaltwo.splice(1,0,44,45,46)
    console.log(`#{originaltwo} after INSERT WITHOUT DELETE`)

    let originalthree = [3,4,5,5,66,66,77,8,8,8,9,9,9,]
    console.log(`${originalthree} original array`)
    // INSERT WITHDELETE
    // note that we are starting at index 1 and 0 says no deletions
    // after 0 we pass eleemnets to be inserted 
    originalthree.splice(1,2,44,45,46)
    console.log(`${originalthree} after INSERT WITH DELETE`)

    //Find the index of a specific element using indexOf
    let indedof66 = originalthree.indexOf(66)
    console.log(`${indedof66} index of 66`)

    //Check if an element exists in an array using includes.
    let re:boolean = originalthree.includes(90)
    console.log(`${re} result of value exists`)

    //Convert an array to a string using toString.
    let arraytostring = originalthree.join(',')
    console.log(`${arraytostring} converted array to string with , included`)
    let arraytostring2 = originalthree.join('')
    console.log(`${arraytostring2} converted array to string`)

    // Iterate through an array using forEach and print each element.
    originalthree.forEach(num => {
        console.log(`${num} number printed`)
    })

    // Create a new array by doubling the values using map.
    originalthree.map((num) =>{ 
        num=num*2;
        console.log(`${num} number doubled`)
    })

    // Filter out even numbers from an array using filter.
    let originalFour = [12, 8, 42, 16, 90,5, 23, 7, 15, 3]
    originalFour.filter((num)=>{
        if(num%2 ===0){
            console.log(`${num} is even`)
        }
    })

    // Find the sum of all numbers using reduce.
    //let finalResult = array.reduce(function(accumulator, currentValue, currentIndex, array) {
    // Return the updated result value to pass onto the next iteration step
    //}, initialValue);

    const totalsum = originalFour.reduce((sum, num) => {
        return sum = sum + num
    },0)
    console.log(`${totalsum} of numbers`)

    // Check if at least one element is even using some.
    originalFour = [12, 8, 42, 16, 90,5, 23, 7, 15, 3]
    // Cleaner shorthand version
    const hasEven = originalFour.some(num => num % 2 === 0);
    console.log(hasEven)

    // Check if all elements are positive using every.
    let originalFive = [1,8,7,10,-1]
    const hasNegative = originalFive.some(num => num <0);
    console.log(hasNegative)

    // Remove duplicates from an array using filter and indexOf.
    let originalSix = [1,1,2,4,5,6]
    const uniqueNumbers = new Set();
    for(let num of originalSix){
        uniqueNumbers.add(num)
    }
    console.log(uniqueNumbers)
    console.log(`${[...uniqueNumbers]} unique numbers`)

    // Syntax
    // let newArray = array.filter((element, index, array) => expression);
    let uniqueArray = originalSix.filter((num, index, originalSix) =>{
        // Keep the number only if its first occurrence matches the current position index
        // Trick here is indexOf always looks from the beginning so in case a number is repeated in the array 
        // when we look for indexOf the number then it will return the initial index only 
        // which will not be equal to actual index of the number so === condition will fail. 
        return originalSix.indexOf(num) === index;
    })
    console.log(uniqueArray)

    // Reverse an array.
    originalSix = [1,1,2,4,5,6]
    console.log(`${originalSix} original array`)
    console.log(originalSix.reverse())

    //Find the length of a string.
    let word = "Apple"
    console.log(word.length)

    //Convert a string to uppercase using toUpperCase.
    console.log(word.toUpperCase())

    //Convert a string to uppercase using toUpperCase.
    console.log(word.toLowerCase())

    //Get a character at a specific index using charAt().
    console.log(word.charAt(2))

    //Find the position of a word using indexOf().
    let sentence = "selenium is best of all";
    console.log(sentence.indexOf("best"));

    //Check if a string includes a word using includes().
    let testres = sentence.includes("best")
    console.log(testres)

    //Check if a string starts with a specific word using startsWith().
    testres = sentence.startsWith("selenium")
    console.log(testres)

    //Check if a string ends with a specific word using endsWith().
    testres = sentence.endsWith("of")
    console.log(testres)

    // Replace a word in a sentence using replace().
    let newstring = sentence.replace("best", "test")
    console.log(newstring)

    // Split a sentence into words using split() and remove leading/trailing spaces using trim().
    let newsent = sentence.trim().split(' ');
    console.log(newsent)
}

arrayPush()

