function add(a:number,b:number){        // can return or may not return as well as can return any value. 
    let sum = a+b;
    console.log("Sum of two number is "+sum);
}

add(10,20);
add(100,200);

function sayHello(name:string): string {
        return "Welcome "+name;
}
console.log(sayHello("Ramesh"));

function empInfo(id:number,name:string,salary:number):void{
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("salary is "+salary);
}
empInfo(100,"Ramesh",15000)