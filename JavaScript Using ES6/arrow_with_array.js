let num = [10,20,30,40,50];
document.write("<br/>retrieve the element using forEach with anonymous function")
num.forEach(function(v){
    document.write("<br/>Value is "+v)
})
document.write("<br/> retrieve element from array using arrow function")
num.forEach(v=>document.write("<br>Value is "+v));