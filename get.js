let url = fetch("https://reqres.in/api/users?page=1");
url.then(res=>res.json())
.then(d=>{
    console.log(d)
        });

fetch('https://reqres.in/api/users')
 .then(res=>{
    if(res.ok){
        console.log("Http req successful");
    }else{
        console.log("http req rejected")
    }
    return res;
 })

 .then(res=>res.json())
 .then(data=> console.log(data))
 .catch((error)=>console.log(error));




