var myHttp = require("http");

var myHost = "localhost"; // host, localhost to serve locally
var myPort = 3000; // port, any free port


/* 
# creating a server with createServer() which takes a callback function as arguments
        this callback is executed each time a request is received
        here we are just printing something in the console

# request contains all the information related to client's request
# response is used to return the data back to the client
        .writeHead() is a method which is used to send the status code and the MIME type 
        .end() is used to tell the server that the request has been fulfilled
*/

var myServer = myHttp.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    console.log("Server is working");
    response.end;
});

/* 
    server.listen() is used to bind to the port an start listening for incoming connections
*/
myServer.listen(myPort, myHost, (error) => {
    if (error) {
        return console.log("Error occured : ", error);
    }
    console.log("Server is listening on " + myHost + ":" + myPort);
});