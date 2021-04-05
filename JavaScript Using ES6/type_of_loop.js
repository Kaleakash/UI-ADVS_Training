let num=[100,200,300,400,500,600];
document.write("<br/> Using for loop<br/>")
for(let i=2;i<4;i++){
    document.write("<br/> Value of i is "+num[i])
}
document.write("<br/> Using in loop<br/>")
for(let index in num){
    document.write("<br/>Index value is "+index+" Value is "+num[index]);
}
document.write("<br/> using of loop")
for(let val of num){
    document.write("<br/> Value is "+val);
}