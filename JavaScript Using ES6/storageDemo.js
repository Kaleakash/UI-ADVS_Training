function storeSession(){
    sessionStorage.setItem("obj1",10);
    console.log("Data store in session scope")
}
function retrieveSession(){
    console.log("Get the Data from session "+sessionStorage.getItem("obj1"))
}
function storeLocal(){
    localStorage.setItem("obj2",10)
    console.log("Data store in local scope")
}
function retrieveLocal(){
    console.log("Get the Data from local "+localStorage.getItem("obj2"))
}