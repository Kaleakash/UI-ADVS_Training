//ES5 style create thet object 
function Employee() {
    this.id = 100;
    this.name = "Ajay";
    this.displayEmpInfo = function() {
        document.write("<br/>This is employee class(ES5) style function ")
        document.write("<br> Id is "+this.id);
        document.write("<br> Name is "+this.name);
    }
}
var emp1 = new Employee();
emp1.displayEmpInfo();

//ES6 style create the object
class Person {
    id=100;
    name="Ramesh";
    displayPersonInfo() {
        document.write("<br/> This is Person class function")
        document.write("<br> Id is "+this.id);
        document.write("<br> Name is "+this.name);
    }
}
let p1 = new Person();
p1.displayPersonInfo();