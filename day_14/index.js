const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("new user connected");

    // every time this user sends a message
    // "chat message" is a custom event
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        // will emit the message to all connected sockets
        io.emit("chat message", msg);
    });

    // will be fired when the user disconnect theirself
    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});