const express = require('express');
const Socket = require('socket.io');
const app = express()
const server = require("http").createServer(app);

// Server connection
server.listen(8080, () => {
    console.log("server connected on port : 8080");
})

const io = Socket(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})


let messages = []
let usernames = []

io.on("connection", (socket) => {
    console.log("connected to", socket.id);

    socket.on("messages_data", (data) => {
        console.log(data);
        messages.push(data)
        io.sockets.emit("messages_from_server", {
            message: messages,
            user: socket.user
        })
    })


    socket.on("username_data", (data) => {
        console.log(data);
        socket.user = data;
        usernames.push(data)
        io.sockets.emit("username_from_server", usernames)
    })






    // SAMPLE
    // SEND DATA TO CLIENT
    // io.sockets.emit("message", {
    //     message: "Hello, I'm from server"
    // })


    // // RECEIVE DATA FROM CLIENT
    // socket.on("data", (data) => {
    //     console.log(data);
    // })
})