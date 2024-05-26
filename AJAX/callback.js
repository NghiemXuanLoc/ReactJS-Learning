 

 let promies = new Promise(function(resolve, reject){
    return resolve(1);
 })


 promies
    .then(function(data) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                console.log("Nghiem Xuan Loc 1 " + data);
                resolve("aaaaa");
            }, 2000);
        })
    })
    .then(function(data){
        console.log("Nghiem Xuan Loc 2 " + data);
    })
    .catch(() => console.log("loi"));
    

    