// Why use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"Kiran"});
        },1000);
    });
}