export {};

/* If condition:
1.
Check if a character is uppercase.
2.
Check if a number is a multiple of 10. */

// Check if a character is uppercase
let ch: string = "H";
if(ch >= "A" && ch <= "Z"){
    console.log("ch is an uppercase letter");
}

let num:number = 100;
if(num%10 == 0){
    console.log("num is a multiple of 10");
}


/* 
If else condition:
3.
Check if a person is a teenager (age between 13 and 19).
4.
Compare two numbers and print the larger one.
5.
Check if a number is positive, negative, or zero.
6.
Check if a person is eligible for a senior citizen discount (age >= 60).
 */

let age:number = 16;

if(age >= 13 && age <= 19){
    console.log("You are a teenager");
}
else{
    console.log("You are not a teenager");
}

let a: number = 20, b:number = 30;
if(a > b){
    console.log(`${a} is larger`);
}   

let testnumber: number = -5;
if(testnumber > 0){
    console.log(`${testnumber} is positive`);
}
else if(testnumber < 0){
    console.log(`${testnumber} is negative`);
}
else{
    console.log(`${testnumber} is zero`);
}


let age3: number = 65;
if(age3 >= 60){
    console.log("You are eligible for a senior citizen discount");
}
else{
    console.log("You are not eligible for a senior citizen discount");
}   



// Program 12: Check if a number is divisible by both 2 and 3
let num5: number = 15;
if (num5 % 2 === 0 && num5 % 3 === 0) {
    console.log(`${num5} is divisible by both 2 and 3.`);
} else if (num5 % 2 === 0) {
    console.log(`${num5} is divisible by 2 but not by 3.`);
}else if (num5 % 3 === 0) {
    console.log(`${num5} is divisible by 3 but not by 2.`);
} 
else {
    console.log(`${num5} is not divisible by either 2 or 3.`);
}



let monthnumber:number = 5;

switch(monthnumber){

case 1:
    console.log("January");
    break;
case 2:
    console.log("February");
    break;
case 3:
    console.log("March");
    break;
case 4:
    console.log("April");
    break;              
case 5:
    console.log("May");
    break;
case 6:
    console.log("June");
    break;
case 7:
    console.log("July");
    break;
case 8:
    console.log("August");
    break;
case 9:
    console.log("September");
    break;
case 10:
    console.log("October");
    break;
case 11:
    console.log("November");
    break;
case 12:
    console.log("December");
    break;
}

