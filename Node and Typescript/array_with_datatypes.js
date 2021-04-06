// creating the literal style. 
var a = [1, 2, 3, 4, 5, 6, 7];
var stdNames = ["Ravi", "Ramesh", "Rajesh", "Rakesh"];
var info = [100, "Ajay", true, 200];
// create the array using generic style 
var b = [100, 200, 300, 400, 500];
var names = ["Seeta", "Meeta", "Reeta"];
var details = [200, "Balaji", 32];
a.forEach(function (v) { return console.log(v); });
var n = new Array(); // using new keyword 
var m = []; // literal style 
n.push(100);
n.push(200);
m.push(100);
m.push(200);
console.log("Size is " + n.length);
