// let url = fetch("https://reqres.in/api/users?page=1");
// url.then(res=>res.json())
// .then(d=>{
//     console.log(d)
//         });

// fetch('https://reqres.in/api/users')
//  .then(res=>{
//     if(res.ok){
//         console.log("Http req successful");
//     }else{
//         console.log("http req rejected")
//     }
//     return res;
//  })

//  .then(res=>res.json())
//  .then(data=> console.log(data))
//  .catch((error)=>console.log(error));




// customFetch('https://reqres.in/api/users?page=2','GET')

// function customFetch(url,type,data){
    
//     if(type==='GET')
//         fetch(url,{
//             method : type,
        
//             headers : {
//             "Content-type":"application/json"
//             },
//         })
//             .then(res=>{
//                 if(res.ok){
//                     console.log("Http req successful");
//                 }else{
//                     console.log("http req rejected")
//                 }
//                 return res;
//             })
        
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//         .catch((error) => console.log(error))

//     if(type==='POST' || type == 'PUT')
//         fetch(url,{
//             method : type,
        
//             headers : {
//             "Content-type":"application/json"
//             },
        
//             body:JSON.stringify({data})
//         })

//             .then(res=>{
//                 if(res.ok){
//                     console.log("Http req successful");
//                 }else{
//                     console.log("http req rejected")
//                 }
//                 return res;
//             })
        
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//         .catch((error) => console.log(error))
        
// }

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






