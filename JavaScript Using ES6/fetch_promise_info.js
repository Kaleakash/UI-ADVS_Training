// display the result in console 

//fetch("https://api.mocki.io/v1/b043df5a").then(response=>response.json()).
//then(data=>console.log(data)).catch(error=>console.log(error));


fetch("https://api.mocki.io/v1/b043df5a").then(response=>response.json()).
then(data=>document.write("city"+data[0].city+" name "+data[0].name)).catch(error=>console.log(error));

//display all records in view in proper format. 