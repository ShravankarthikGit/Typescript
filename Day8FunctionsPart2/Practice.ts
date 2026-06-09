// Call back function is one that is passed as parameter to another fucntion and is executed after some operation is completed
function abc (a: number, b: number, xyz:any){
    let sum = a + b;
    xyz(sum);
}


function xyz(c: number){
    console.log(c);
}

abc(10, 20, xyz); // 30


////Overloaded function


