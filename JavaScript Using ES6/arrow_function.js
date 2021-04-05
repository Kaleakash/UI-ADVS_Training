let dis1 = function() {
    document.write("<br/>expression style function")
}
dis1()
let addNumber = function(a,b){
        let sum = a+b;
        return sum;
}
document.write("<br/>Sum of two number using expression style is "+addNumber(100,200));
let largetNumber = function(a,b){
                if(a>b){
                    return " a is largest"
                }else {
                    return " b is largest"
                }
}
document.write("<br> Largest of two number is expression style "+largetNumber(10,50))
let dis2 = ()   => document.write("<br> arrow function ");
dis2();                    // by default arrow function return value without return keywords. 
let sumOfNumber = (a,b)=>a+b;
document.write("<br/> Sum of two number using arrow style "+sumOfNumber(100,200));
let biggestNumber = (a,b)=> {
    if(a>b){
        return "a largest";
    }else {
        return "b largest";
    }
}
document.write("<br/>Largest of two number is usign arrow style "+biggestNumber(100,200));
