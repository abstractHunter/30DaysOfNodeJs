const cp = require("child_process");

const child = cp.spawn("find", ["/"]); // command, list of arguments

// if there is something on stdout
child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

// if there is something on stderr
child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

child.on("error", (error) => {
    console.log(`error: ${error.message}`);
});

child.on("exit", (code, signal) => {
    if (code) console.log(`Process exit with code ${code}`);
    if (signal) console.log(`Process killed with signal ${signal}`);
    console.log(`Done`);
});