export {};

let num: number = 0;
let sum: number = 0;

while (num <11) {
    sum = sum + num;
    num++;
}

console.log(sum);

///////////////
num = 10;

let factorial:number =1;
while (num >0){
    factorial = factorial * num;
    num --;
}

console.log(factorial);


///////////

num= 236763276;
let len: number = num.toString().length;
let reverse: string = "";

while (len > 0) {
    let rem:number = num%10;
    reverse = reverse + rem.toString();
    // 🟢 THE FIX: Divide by 10 and round down to drop the last digit
    num = Math.floor(num / 10); 
    len--;
}

// Using array approach
let quickReverse = num.toString().split("").reverse().join("");

console.log(reverse);
console.log(quickReverse);

///////////////////////

let checknum: number = 9;
let count: number = 2;
let isPrime: boolean = true; // Assume it's prime until proven otherwise

if (checknum < 2) {
  console.log("Number is not prime");
} else if (checknum === 2) {
  console.log("Number is prime");
} else {
  while (count < checknum) {
    if (checknum % count === 0) {
      console.log("Number is not prime");
      isPrime = false; 
      break;  
    }
    count = count + 1;
  }

  if (isPrime) {
    console.log("Number is prime");
  }
}



////////// Find the largest digit in a given number
let gennumber:number = 78686876;
count = gennumber.toString().length;
let largestDigit:number = 0;

while (count >0){
    let rem:number  = gennumber%10;
    if (rem > largestDigit) {
        largestDigit = rem;
    }
    gennumber = Math.floor(gennumber/10);    
    count--;
}
console.log(largestDigit);


////// Paliondrome number
let orignumber:number = 67679986;
let reversednumber:number = 0;
count = orignumber.toString().length;

while (count >0){
    let rem:number = orignumber%10;
    reversednumber = reversednumber*10 + rem;
    orignumber = Math.floor(orignumber/10);
    count--;
}

console.log(reversednumber);


///////////////////
// Print multiplication table of 5 from 5 to 50
for (let counter =1; counter <= 10; counter++) {
    let multiple: number = 5*counter;
    console.log("5" , " x " + counter , " = " , multiple);
}

/////////////////////////////

// Print prime numbers between 1 and 20
for (let num:number = 2; num <= 20; num++) {
    let isprime:boolean  = true;
    if (num === 2){
        console.log(`${num} is prime`);
    } else {
        let counter3:number = 2;
        while ( counter3 <num){
            if(num % counter3 === 0) {
                console.log(`${num} is not prime`);
                isprime = false;
                break;
            }
            counter3 = counter3 + 1;
        }
        if (isprime) {
            console.log(`${num} is prime`);
        }
    }
}
/// Sum of even numbers between 1 and 20
let sumEven: number = 0;
for (let st:number = 1; st <= 20; st++) {
    if (st % 2 === 0) {
        sumEven = sumEven + st;
    }
}
console.log(sumEven);


/// Sum of odd numbers between 1 and 20
let sumOdd: number = 0;
for (let st:number = 1; st <= 20; st++) {
    if (st % 2 !== 0) {
        sumOdd = sumOdd + st;
    }
}
console.log(sumOdd);

// Print Table of 7
for (let sevenmultipl:number = 7; sevenmultipl <= 70; sevenmultipl += 7) {
    console.log(sevenmultipl);
}

// Print Numbers Divisible by 3 and 5 from 1 to 100
for (let num:number = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
}


// 15. Count Number of Digits in a Number
num = 12345;
count = 0;
for (let n: number = num; n > 0; n = Math.floor(n / 10)) {
    count++;
}
console.log(count);


/////////
// using do-while print numbers form 1 top 10
let check:number = 1
do{
console.log(check);
check++;

}while(check<=10);

