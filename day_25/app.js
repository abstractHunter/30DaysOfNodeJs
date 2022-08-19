const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();
const nbCpu = os.cpus().length;

app.get("/", (req, res) => {
    for (let i = 0; i < 1e8; i++) {
        // some long process
    }
    res.send(`OK... ${process.pid}`);

    // killing a worker
    // cluster.worker.kill();
});


/*
    the master process will create the worker processes
    the worker processes will be listening on localhost:3000
*/
if (cluster.isMaster) {
    for (let i = 0; i < nbCpu; i++) {
        cluster.fork();
    }

    // if a worker dies, replace it immediately
    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork()
    })
} else {
    app.listen(3000, () => console.log(`server ${process.pid} listening @ localhost:3000`));
}

// app.listen(3000, () => console.log("server listening @ localhost:3000"));