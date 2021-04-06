// creating the literal style. 

let a:number[]=[1,2,3,4,5,6,7];
let stdNames:string[]=["Ravi","Ramesh","Rajesh","Rakesh"];
let info:any[]=[100,"Ajay",true,200];

// create the array using generic style 
let b:Array<number>=[100,200,300,400,500];
let names:Array<string>=["Seeta","Meeta","Reeta"];
let details:Array<any>=[200,"Balaji",32];

a.forEach(v=>console.log(v))

let n:number[]=new Array();     // using new keyword 
let m:number[]=[];              // literal style 
n.push(100);    n.push(200);
m.push(100);     m.push(200);
console.log("Size is "+n.length)
