function getuser(){
    const response = new XMLHttpRequest();

    response.onload = function(){
        const userRes = JSON.parse(response.responseText);
        console.log(userRes.data);
    }


    response.open("GET", "https://reqres.in/api/users");
    response.send();

}
