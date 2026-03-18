// Handling errors with try/catch

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailable = true;

        if(isServiceAvailable){
            resolve("Success! Customer profile loaded.");
        }
        else{
            reject("Unsuccessfull!! Customer profile unavailable.");
        }
    });
}

function showCustomerProfile(){
    try{
    const message = loadCustomerProfile();
    console.log(message);
    }
    catch(error){
        console.error("Error:",error);
    }

}
showCustomerProfile();