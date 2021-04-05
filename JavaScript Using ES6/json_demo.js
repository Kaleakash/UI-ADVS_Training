let empStringFormat = '{"id":100,"name":"Ravi","skill":["Java","Python","Angular"],"add":{"city":"Bangalore","state":"Kar"}}';
document.write(empStringFormat)
document.write("<br/>")

document.write("<br/>Id is "+empStringFormat.id)
document.write("<br/>Name is "+empStringFormat.name)

// convert string to json format 
let empJson = JSON.parse(empStringFormat);
document.write("<br> After conversion ")
document.write("<br> Id is "+empJson.id)
document.write("<br> Name is "+empJson.name)
document.write("<br> Skill Details "+empJson.skill[0])
document.write("<br> Skill Details "+empJson.skill[1])
document.write("<br> Skill Details "+empJson.skill[2])
document.write("<br> City is "+empJson.add.city)
document.write("<br> City is "+empJson.add.state)
// convert json to string 
let empStringFormat1 = JSON.stringify(empJson);
document.write("<br/>"+empStringFormat1)
document.write("<br>Id is "+empStringFormat1.id)