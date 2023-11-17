//Back-end
const express = require('express')
const { createServer } = require('node:http')
const { Server } = require('socket.io')

const app = express()
const http = createServer(app)
const io = new Server(http)


io.on("connection", (socket) => {

    socket.on("disconnect", (socket) => {
        console.log("X desconectou: " + socket.id) //Para dizer quem desconectou do servidor
    })

})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("APP rodando!")
})