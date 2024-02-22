fetch("https://reqres.in/api/users/2",{
    method:"DELETE",

    headers:{
        "Content-type":"application/json"
    }
})
.then(res=>{
    if(res.ok){
        console.log("Http req successful");
    }else{
        console.log("http req rejected")
    }
    return res;
})
.catch((eroor)=>console.log(eroor));