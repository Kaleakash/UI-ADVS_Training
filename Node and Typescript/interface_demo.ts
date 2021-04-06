interface Abc {
    a:number;
    dis():void;
}
// We have to create interface with only variable or only method (without body methods); typescript 
interface Bank {                //specification 
    withdraw():void;
    deposite():void;
}
class Hdfc implements Bank {    // implementation 
    withdraw(): void {

    }
    deposite() :void {

    }
}
class Sbi implements Bank {
    withdraw(): void {

    }
    deposite() :void {

    }
}
//interface with propert    to create the referenc must be type of 
interface Emmployee {
    id:number;
    name:string;
    salary:number;
    age?:number;       //optional 
}
//object creating using literal stye or function ES5 or class ES6 
let emp1:Emmployee = {"id":100,"name":"Ramesh","salary":12000};
let emp2:Emmployee = {"id":101,"name":"Ajay","salary":14000};
let emp3:Emmployee = {"id":101,"name":"Balaji","salary":16000,age:21};





