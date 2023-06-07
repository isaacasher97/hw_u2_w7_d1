const express = require("express")

const app = express()

app.get("/greeting", (req, res) => {
    res.send("Hello, Stranger")
})

app.get("/greeting/:name", (req, res) => {
    console.log(req.params)
    const name = req.params.name
    res.send(`<h1>Wow! Hello there, ${name}!</h1>`)
})





app.listen(3500, (req, res) => {
    console.log("Homework server running on port 3500!")
})