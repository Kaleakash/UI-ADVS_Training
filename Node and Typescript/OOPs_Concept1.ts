class Employee {
    public id:number;
    name:string;
    private salary:number;
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
let emp1 = new Employee(125,"Lokesh",23000);
emp1.display();
console.log("Id id is "+emp1.id);
console.log("Name is "+emp1.name);
//console.log("salary is "+emp1.salary)
