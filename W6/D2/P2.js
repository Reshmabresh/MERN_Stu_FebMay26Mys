// JS handles asynchronous tasks in NodeJS
function fetchReport(callback){
    console.log("Fetching report data...");

    setTimeout(() => {
        const report = "Monthly report is ready";
        callback(report);
    }, timeout);
}