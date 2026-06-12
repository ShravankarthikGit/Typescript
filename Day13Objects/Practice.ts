export { };

let employee: object = {
    name: "sachin",
    age: "78",
    emaik: "testa2gmail.com",
    code: "76778"
}

let employee2 = {
    name: "John",
    salary: 50000,
    job: "Engineer",
    getDetails: function (): string {
        //console.log(this.name,this.salary,this.job);
        return `${this.name} is a ${this.job} earning ${this.salary}`;
    }
}

// When you have defined type as object we cant access the object props firectly 
// console.log(employee.name)

// Object declaration
let student: {
    name: string,
    age: number,
    grade: number
} =
// Assignment
{
    name: "apple",
    age: 34,
    grade: 5
}

// cefining custom type 
type newtype = {
    name: string
    class: string
    year: number
}

// using the custom type
let students: newtype = {
    name: "biullow",
    class: "tenth",
    year: 2007
}

console.log(students.name)

// Inside a class block, you can only declare properties (fields), methods, or a constructor. The let, const, and var keywords are strictly 
// used for declaring local variables inside functions or blocks, 
// and they will cause a syntax error if placed directly inside a class.

class Person {

    // Below are the properties 
    ssn: string;
    firstName: string;
    lastName: string;

    // constructor
    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    };

    // method
    testfunc() {
        return "i am a mothod"
    }
}

// object from class
let p = new Person("pilli","loooi","oikuu");
let res = p.testfunc();
console.log(p.firstName, p.lastName,res )

let p2 = new Person("dj","tillu","holo");

console.log(p2.firstName, p2.lastName, p2.testfunc() )

