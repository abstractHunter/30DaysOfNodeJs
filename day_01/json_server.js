var myHttp = require("http");

var myHost = "localhost";
var myPort = 3000;

var myServer = myHttp.createServer(function(request, response) {
    // MIME type is now "application/json"
    response.writeHead(200, { "Content-Type": "application/json" })

    // creating a JSON
    let json_response = {
        status: 200,
        message: 'succssful',
        result: ['sunday', 'monday', 'tuesday', 'wednesday'],
        code: 2000
    }
    console.log('Server Running');
    response.end(JSON.stringify(json_response));
});

myServer.listen(myPort, myHost, (error) => {
    if (error) {
        return console.log("Error occured : ", error);
    }
    console.log("Server is listening on " + myHost + ":" + myPort);
});