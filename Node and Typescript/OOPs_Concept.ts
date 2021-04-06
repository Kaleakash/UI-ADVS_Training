class Employee {
    id:number;
    name:string;
    salary:number;
    constructor(id:number=100,name:string="Unknwon",salary:number=8000){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display():void {
        console.log("Employee class function")
        console.log("  Id is "+this.id)
        console.log(" Name is "+this.name);
        console.log(" Salary is "+this.salary);
    }
}
let emp1 = new Employee();
emp1.display();
let emp2 = new Employee(123)
emp2.display();
let emp3 = new Employee(124,"Ramesh");
emp3.display();
let emp4 = new Employee(125,"Lokesh",23000);
emp4.display();