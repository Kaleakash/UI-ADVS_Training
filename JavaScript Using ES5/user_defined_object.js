/*function Employee() {       //user-define object first letter upper case. 
        this.id = 100;      // if we want to write any property for object in ES5 we 
        this.name="Ramesh";
        this.age = 21;                   // have to use this.property = value;
        this.dis = function() {
                document.write("<br/>Employee class(ES5 style) function");
                document.write("<br/>Id is "+this.id);
                document.write("<br/>Name is "+this.name);
                document.write("<br/>Age is "+this.age);
        }

}
//creating the memory 
var emp1 = new Employee();
emp1.dis();         // using object we are calling function 
//alert(emp1.id)      //using object we are access property 
//alert(emp1.name);
//alert(emp1.age);

var emp2 = new Employee();
emp2.dis();*/

// parameterized ES5 style object creation 
function Employee(id,name,age) {       //user-define object first letter upper case. 
    this.id = id;      // if we want to write any property for object in ES5 we 
    this.name=name;
    this.age = age;                   // have to use this.property = value;
    this.dis = function() {
            document.write("<br/>Employee class(ES5 style) function");
            document.write("<br/>Id is "+this.id);
            document.write("<br/>Name is "+this.name);
            document.write("<br/>Age is "+this.age);
    }
}
var emp1 = new Employee(100,"Ramesh",21);
var emp2 = new Employee(101,"Ajay",26);
//In JavaScript we can add run time property 
Employee.prototype.skillSet="JavaScript";       // run time add skill set property
//alert("First employee "+emp1.skillSet)
//alert("Second Employee "+emp2.skillSet)
emp1.skillSet="HTML5/CSS3"; //change value from JavaScript to HTML5/CSS3
//alert("First employee "+emp1.skillSet)
//alert("Second Employee "+emp2.skillSet)
Employee.prototype.info= function(){        // adding run time behaviour 
    document.write("<br/>Skill Set "+this.skillSet)
}
emp1.dis();
emp1.info();
emp2.dis();
emp2.info();

