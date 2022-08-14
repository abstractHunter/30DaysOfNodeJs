const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");
const users = require("./User");

const app = express();
mongoose.connect(
    "mongodb://localhost/auth_app_test",
    () => { console.log("Connected to database auth_app_test"); },
    e => { console.log(e); }
);


// middlewares wich allows us to handle url encoded and json format data 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));

let isLoggedIn = false;

app.get("/", function(req, res) {
    return isLoggedIn ?
        res.sendFile(__dirname + "/public/index.html") :
        res.redirect("/signin");
});

app.get("/signup", function(req, res) {
    res.sendFile(__dirname + "/public/signup.html");
});

app.get("/signin", function(req, res) {
    res.sendFile(__dirname + "/public/signin.html");
})

app.post("/signup", async function(req, res) {
    //console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.password2;

    if (!(username && password && password2)) {
        console.log("Username or password not set");
        res.status(204).send();
    }

    const user1 = await users.findUser(username);

    if (user1 != null) {
        console.log("User already exists");
        return res.status(204).send();
    }

    if (password != password2) {
        console.log("Passwords do not match");
        return res.status(204).send();
    }

    const data = {
        "username": username,
        "password": hashPassword(password)
    };
    users.createUser(data);

    console.log("user registration was successful");
    isLoggedIn = true;
    return res.redirect("/");
    // res.status(201).send("Created successfully");
});

app.post("/signin", async function(req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (!(username && password)) {
        console.log("Username or password not set");
        return res.status(204).send();
    }

    const user1 = await users.findUser(username);

    if (user1 == null) {
        console.log("User does not exist");
        return res.status(204).send();
    }

    if (hashPassword(password) != user1.password) {
        console.log("Wrong Password");
        return res.status(204).send();
    }

    console.log("Connected successfully");
    isLoggedIn = true;
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server is listening at localhost:3000");
});


// function to hash passwords
const hashPassword = function(value) {
    const algo = "md5";
    const secret_key = "[09fk]Per4&9DB}[d12";
    const hmac = crypto.createHmac(algo, secret_key);
    data = hmac.update(value, "utf-8");
    gen_hash = data.digest("hex");
    return gen_hash;
};