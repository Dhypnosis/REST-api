fetch("https://reqres.in/api/users",{
    method : "POST",
        
    headers : {
        "Content-type":"application/json"
    },
        
    body:JSON.stringify({
        "name": "morpheus",
        "job": "leader"
    })
})

.then(res=>{
    if(res.ok){
        console.log("Http req successful");
    }else{
        console.log("http req rejected")
    }
    return res;
})
        
.then(res=>res.json())
.then(json=>console.log(json))
.catch((error) => console.log(error))
        
