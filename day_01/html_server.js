var myHttp = require("http");
var fs = require("fs");

var myHost = "localhost";
var myPort = 3000;

var myServer = myHttp.createServer(function(request, response) {
    // MIME type is now "text/html"
    response.writeHead(200, { "Content-Type": "text/html" })

    // reading the html file
    fs.readFile("index.html", (err, data) => {
        // checking for errors
        if (err) {
            throw err
        }
        console.log("Operation Success");

        // sending the response
        response.end(data);
    });
});

myServer.listen(myPort, myHost, (error) => {
    if (error) {
        return console.log("Error occured : ", error);
    }
    console.log("Server is listening on " + myHost + ":" + myPort);
});