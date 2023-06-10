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

app.get("/magic/:question", (req, res) => {
    const question = req.params.question
    const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const response =  magicResponses[Math.floor(Math.random() * magicResponses.length)]

    res.send(`<h1>Question: ${question}</h1><h1>Response: ${response}</h1>`);
})



app.listen(3500, (req, res) => {
    console.log("Homework server running on port 3500!")
})