
// Parent class 
class biggy {
    parentName;
    ParentAge;

    constructor(parentName, ParentAge){
        this.parentName = parentName;
        this.ParentAge = ParentAge;
    }

    hobby(){
        return "i am from parent"
    }
}

class childy extends biggy{
    childName;
    childAge;

    constructor(childName, childAge, parentName, ParentAge){
        super(parentName, ParentAge)
        this.childAge = childAge;
        this.childName = childName;
    }

    hobby(){
        console.log("i am from child")
        let parentmethodres = super.hobby();
        console.log(parentmethodres)
    };

    
    chilchobby2(){
        console.log("i am from child method 2")
    }
    // note that on javascript super will bot be able to access properties in parent 
    // below will retuen iundefined. 
    // super will only work for methods 
    // properties can be accessed using this keyword
    accessaprentproperty(){
        //return super.ParentAge
        return this.ParentAge
    }
}


let cobj = new childy("billu","25","parentbillu", "77")

console.log(cobj.childAge, cobj.childName)
console.log(cobj.ParentAge, cobj.parentName)

cobj.hobby();
console.log(cobj.accessaprentproperty())