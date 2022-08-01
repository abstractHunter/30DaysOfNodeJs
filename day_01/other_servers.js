var myHttp = require("http");

var myHost = '127.0.0.1';
var myPort = 3000;

var myServer = myHttp.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Hello");
    response.end;
});


myServer.listen(myPort, myHost, (error) => {
    if (error) {
        return console.log("Error occured : ", error);
    }
    console.log("Server is listening on " + myHost + ":" + myPort);
});