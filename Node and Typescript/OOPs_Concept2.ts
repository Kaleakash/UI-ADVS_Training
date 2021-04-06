class Employee {
    constructor(public id:number=100,public name:string="Unknwon",private salary:number=8000){
       
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

