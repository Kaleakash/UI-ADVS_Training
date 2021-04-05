class Person {
    //name = "Ravi";
    //age = 21;             // this is optional in ES6 
    constructor(name="Unkown",age=18) { // parameterized constructor...
        this.name = name;
        this.age  = age;
        document.write("<br> Object created....")
    }
    /*constructor() {

    }*/
    disPersonInfo(){
        document.write("<br/>person details");
        document.write("<br/>name "+this.name);
        document.write("<br/>age "+this.age);
    }
}
let p1 = new Person("Ramesh",21);
p1.disPersonInfo();
let p2 = new Person("Rakesh",22);
p2.disPersonInfo();
let p3 = new Person("Ajay");
p3.disPersonInfo();
let p4=new Person();
p4.disPersonInfo();