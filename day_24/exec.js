const cp = require("child_process");

// exec cannot handle huge output commands like for instance "find /"

cp.exec("ls -la", (error, stdout, stderr) => {
    if (error) { // if the command is wrong or have missing arguments
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) { // errors produced after executing the command
        console.log(`stderr: ${stderr.message}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});