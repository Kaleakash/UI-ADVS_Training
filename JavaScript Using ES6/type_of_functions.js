// Normal style function 
function dis1() {
    document.write("<br/>Normal function style")
}
dis1();

//Expression style function with name 

let abc = function dis2() {
    document.write("<br/>Expression style function with name")
}
abc();
//Expression style function with anonymous function 
let dis3 = function() {
    document.write("<br> Expression style fucntion with anonymous function")
}
dis3();

//Normal function with parameter In ES5 as well as ES6 only if function name must be match not mandatory parameter
/*
document.write("<br> function with parameter")
function empDetails(id,name,salary){
    document.write("<br/>Id is "+id);
    document.write("<br/>name is "+name)
    document.write("<br/>salary is "+salary)
}
empDetails(100,"Ravi",12000)
empDetails(101,"Rakesh")
empDetails(102)
empDetails();
*/

document.write("<br> function with default initliazation parameter")
function empDetails(id,name="Unkown",salary=8000){
    document.write("<br/>Id is "+id);
    document.write("<br/>name is "+name)
    document.write("<br/>salary is "+salary)
}
empDetails(100,"Ravi",12000)
empDetails(101,"Rakesh")
empDetails(102)
empDetails();

document.write("<br> fucntion with Rest Parameter and Spread parameter ")
//...skillSet ready to receive 0, 1 or many using rest operator  
function studentInfo(sid,sname,age,...skillSet){
    document.write("<br> Student Id is "+sid);
    document.write("<br> Student Name is "+sname);
    document.write("<br> Student age is "+age);
    document.write("<br> Number of skill set are "+skillSet.length)
    //document.write("<br> Student Skill Set are "+skillSet)  
    skillSet.forEach(function(skill){
        document.write("<br/> Skill "+skill);
    })  
}
//passing type it required 0, 1 or many parameter we can use rest operator 
studentInfo(1122,"Raj",21);                 //skill set 0
studentInfo(1123,"Ravi",24,"C");            // 1
studentInfo(1124,"Ramesh",26,"C","C++","Java"); //3
studentInfo(1125,"Rakesh",28,"HTML5","CSS3","JavaScript","Angular");    //4
let skillInfo = ["C","Python","Java","ReactJS"];
studentInfo(1126,"Veeta",25,...skillInfo);                  //1 or 4 
// spread operator is use to pass array value to rest operator. 






