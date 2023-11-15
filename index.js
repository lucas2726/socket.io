let express = require("express")
let app = express()
let http = require("http").createServer(app) /*Para dizer que vamos usar http no lugar de app paraa criar o servidor*/
let io = require("socket.io")(http)


io.on("connection",(socket) => {
    socket.on("boasvindas", (data) => {
        console.log("Executando evento de boas vindas")
        console.log(data)
    })
})

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
})

http.listen(3000, () => {
    console.log("APP rodando!")
})