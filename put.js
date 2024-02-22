fetch('https://reqres.in/api/users/2',{
    method:"PUT",

    body:JSON.stringify({
        "name": "morpheus",
        "job": "zion resident"
    }),

    headers:{
        "Content-type":"application/json"
    }
})
.then(res=>{
    if(res.ok){
        console.log("http request successful")
    }else{
        console.log("Request failed")
    }
    return res
})
.then(res=>res.json())
.then(res=>console.log(res))
.catch((error)=>console.log(error));