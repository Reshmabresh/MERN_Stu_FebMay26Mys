function AuditReport(reportJSON) {
    const report = JSON.parse(reportJSON);
    
    let okCount = 0;
    let failCount = 0;

    for (const moduleName in report.modules) {
        const status = report.modules[moduleName];
        
        if (status === "OK") {
            okCount++;
        } else if (status === "FAIL") {
            failCount++;
            break; 
        }
    }

    const summary = {
        app: report.app,
        status: report.status,
        okCount: okCount,
        failCount: failCount
    };
    return { summaryObj: summary,
        summaryJSON: JSON.stringify(summary)
    };
    };


const reportJSON = `{
    "app": "Portal",
    "status": "OK",
    "modules": {
        "auth": "OK",
        "payment": "OK",
        "results": "FAIL",
        "profile": "OK"
    }
}`;

console.log(AuditReport(reportJSON));