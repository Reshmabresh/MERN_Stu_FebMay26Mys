// Cookie is used to track session ID

//Simulated sever-side session store 
const sessionStore = {
    "abc123":{
        userId: 101,
        username: "Ahalya",
        role:"student"
    }
};
//Simulated browser cookie value
const browerCookieSessionId = "abc123";

const sessionData = sessionStore[browerCookieSessionId]
console.log("Server-side session data:",sessionData);