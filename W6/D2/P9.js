// Removing EvenEmitter listeners

const EvenEmitter = require("events");

const jobEmitter = new EvenEmitter();

function showJobProgress(status){
    console.log("Job Status: ",status);
}

//Add listener
jobEmitter.on("progress",showJobProgress);

//Emit the event
jobEmitter.emit("progress","50% completed");

//Remove listener
jobEmitter.off("progress","100% completed");