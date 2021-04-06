//Server
var con = "No";
let obj = new Promise((resolve,reject)=> {
   if(con=="Yes"){
    resolve("Successfully done the task")
   }else {
    reject("Failure !")
   }  
});

//Client 
obj.then(data=>console.log("In then "+data)).catch(error=>console.log("In Catch "+error));