const cp = require('child_process');

for (let i = 1; i < 6; i++) {
    let worker = cp.fork("script.js", [i]);

    worker.on('close', function(code) {
        console.log('child process exited with code ' + code);
    });
}