var a=10;
a=20;               // re-assign 
var a="Ravi";       // re-declaration 
document.write("Value of a "+a);
let b =100;
b =200;         //re-assign 
//let b = "Ramesh";   // re-declaration not possible with let keyword
document.write("<br/>Value of b "+b);
function sayHello(name){
    if(name=="Ajay"){
        let msg = "Welcome "+name;
    }else {
        msg = "Welcome unknown";
    }
    return msg;
}
//document.write("<br/>"+sayHello("Ajay"));
for(var i=0;i<1000;i++){}
document.write("<br>The value of i is "+i);
for(let j=0;j<1000;j++){}
//document.write("<br>The value of j is "+j);
const c = 1000;
//c=4000;
if(true){
    const d = 2000;     
}
//document.write("<br>Value of d is "+d);