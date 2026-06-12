
export{};

class marks {

    student:string;
    section?:string;
    readonly school:string;
    static town:string = "dharmavaram";

    // constructor overloading
    // We can declare multiple contructors but implememnt only once 
    constructor(stu:string,sec:string,sch:string);
    constructor(stu:string,sch:string)

    constructor(stu:string,sch:string,sec?:string,){
        this.school = sch;
        this.section = sec;
        this.student = stu;
    }

    testmethod (){
        return (`${this.student} of ${this.section} is from ${this.school} in ${marks.town}`)
    }
}



let town = marks.town
console.log(` static variable town is defined as ${town}`)

let moj1 = new marks("ram", "jeevananda");
moj1.school
moj1.student
moj1.section 

// Note that scholl is set to readonly and we see only compilation error in ts
// when we run the code we see no run time error as javascript had no read-only concept
moj1.school = "hjhj"
moj1.student = "killa"

console.log(moj1.student+ " is " + moj1.school, moj1.section  )


let moj2 = new marks("bheem", "jawahar", "b-section");
moj2.school
moj2.student
moj2.section 
console.log(moj2.student+ " is " + moj2.school, moj2.section)

console.log(moj2.testmethod())


