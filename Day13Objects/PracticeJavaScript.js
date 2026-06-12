
let employee = {
    name: "sachin",
    age: "78",
    emaik: "testa2gmail.com",
    code:"76778"
}

console.log(employee.name)

// IN javascript defining type is not valid

/* let employee2:object = {
    name: "sachin",
    age: "78",
    emaik: "testa2gmail.com",
    code:"76778"
} */


employee ={ 
    name:"John", 
    age:30, 
    salary:50000, 
    job:"Engineer" ,
    getdetails: function () {
        let fullname= this.name.toUpperCase();
        return fullname
    }
}


console.log(employee.getdetails())