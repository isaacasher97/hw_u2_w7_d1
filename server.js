const express = require("express")

const app = express()

app.get("/greeting", (req, res) => {
    res.send("Hello, Stranger")
})

app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Wow! Hello there, ${name}!</h1>`)
})

app.get("/tip/:total/:tippercentage", (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tippercentage
    const tipTotal = total * (tipPercentage /100)
    res.send(`Your total tip will be ${tipTotal}`)
})




app.listen(3500, (req, res) => {
    console.log("Homework server running on port 3500!")
})