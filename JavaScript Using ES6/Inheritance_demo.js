/*class Employee {                // super class, base class or parent class 
    disEmp() {
        document.write("<br/>Employee class function")
    }
}
class Manager extends Employee{     // sub class, derived class or child class 
    disMgr() {
        document.write("<br> Manager class function")
    }
}
let emp1 = new Employee();
emp1.disEmp();

let mgr1 = new Manager();
mgr1.disMgr();
mgr1.disEmp();          // sub clas object we can access super class function. */

class Bike {
    speed(){
        document.write("<br/>60km/hr")
    }
}
class Pulsar extends Bike {
    speed() {               // function overriding : if sub class doesn't like code provided by super class. 
        super.speed();      //calling super class function from sub class function when both have same name
        document.write("<br/>90km/hr");
    }
}
let p1 = new Pulsar;
p1.speed();

//let b1 = new Bike();
//b1.speed();


