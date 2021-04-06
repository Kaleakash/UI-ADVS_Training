var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        if (id === void 0) { id = 100; }
        if (name === void 0) { name = "Unknwon"; }
        if (salary === void 0) { salary = 8000; }
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("Employee class function");
        console.log("  Id is " + this.id);
        console.log(" Name is " + this.name);
        console.log(" Salary is " + this.salary);
    };
    return Employee;
}());
var emp1 = new Employee(125, "Lokesh", 23000);
emp1.display();
console.log("Id id is " + emp1.id);
console.log("Name is " + emp1.name);
//console.log("salary is "+emp1.salary)
