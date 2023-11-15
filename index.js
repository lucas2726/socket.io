const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {

    socket.on("disconnect", (socket) => {
        console.log("X desconectou: " + socket.id)
    })

    socket.on("boasvindas", (data) => {
        console.log("Executando evento de boas vindas")
        console.log(data)
    })
    socket.on("palavra", (data) => {
        console.log(data)
        socket.emit("resultado", data + " - Guia do programador!")
    })
})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

Server.listen(3000, () => {
    console.log("APP rodando!")
})