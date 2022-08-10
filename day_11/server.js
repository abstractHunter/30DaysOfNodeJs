const express = require("express");
const app = express();

app.get("/", function(request, response) {
    response.send("You are at home page !");
});

app.get("/about", function(request, response) {
    response.send("You are at about page !");
});

app.get("/signup", function(request, response) {
    let name = request.query.name;
    let password = request.query.password;

    console.log(name + " ==> " + password);
    response.send("You are at signup page !");
});

app.listen(3000, function() {
    console.log("Server is listening at 3000");
});