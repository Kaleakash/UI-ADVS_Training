let num = [100,200,300,400,500,600];
//forEach will take callback function as a parameter. 

//1st way 
num.forEach(display);           // display function is responsible to display the element one by one

function display(n){
    document.write("<br/><font color=red> Value is "+n+"</font>")       
      // while display time big logic. 
}
//2nd way 
num.forEach(function display(n){
    document.write("<br/> Value is function body"+n)
})

//3rd way 
num.forEach(function(n){
    document.write("<br/> Value is function body with anonymous function"+n)
})

num.forEach(function(v){
    document.write("<br/>Value is "+v)
})