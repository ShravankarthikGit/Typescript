export {};
// Approach 1 - array literal
let names:string[] = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed


// for in loop - iterating over indexes
for (let name in names ){
    console.log(names[name])
}

console.log(names)

// approach 2 - generic array type
let emplnames: Array<string> = ["John", "Smith", "Peter", "Scott"]; // Only strings allowed
console.log(emplnames)

let numarr: Array<number> = [1, 2, 3, 4, 5]; // Only numbers allowed
console.log(numarr)

let data: Array<string | number> = ["John", "Smith", 101, 102]; // Union type (strings and numbers)
console.log(data)


// Iterating over an array using a traditional for loop
for (let i:number = 0; i < emplnames.length; i++){
    console.log(emplnames[i])
}

// for...of
for(let name of emplnames){
    console.log(name)
}


// 
let gennumbers:Array<number> = [1, 2, 3, 4, 5,5,8]; // Only numbers allowed

let evennum = (gen: Array<number>) => {
    let final:Array<number> = [];
    for (let i = 0; i < gen.length; i++){
        if (gen[i] % 2 === 0){
            console.log(gen[i])
            final.push(gen[i])
        }
    }
    return final;
}
console.log(evennum(gennumbers))

function search(ele:number, numlist:Array<number>):boolean {
    for(let num of numlist){
        if (num === ele){
            return true;
        }
    }
    return false;
}
console.log(search(3, gennumbers))


function capitalize(strarray: Array<string>): Array<string> {
    let capwords: Array<string> = [];
    for (let word of strarray){
        let capwrord: string = word.toUpperCase();
        capwords.push(capwrord)
    }
    return capwords;
    //return strarray.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
}
console.log(capitalize(["john", "smith", "peter", "scott"]))



// Tuples in TypeScript
let person:[string,number] = ["", 0]; // Tuple with a string and a number

person[0] = "John"; // Assigning a string value to the first element
person[1] = 30; // Assigning a number value to the second element

console.log(person) // Output: [ 'John', 30 ]
console.log(person[0]) // Output: John
console.log(person[1]) // Output: 30


// tuple array

let persona:[string, number][] = [["ram", 89],["him", 88],["jim", 98]]

persona.push(["kills", 876])

for (let value of persona){
    console.log(value)
}








