const express = require("express")


const app = express()


//Routes
app.get('/', (req, res) => {
    res.send(`<h1>99 little bugs in the code, 99 little bugs</h1><a href="/98">Take one down, patch it around</a>`);
  });
  
  app.get('/:number_of_bottles', (req, res) => {
      // Extract the number of bottles from the URL
    const numberOfBottles = parseInt(req.params.number_of_bottles);
    let song = ''; // Initialize the variable to store the song lyrics and HTML code
  
    if (numberOfBottles === 0) {
       // If there are no more bottles, display the appropriate message  
      song += `<h1>0 bugs in the code.</h1>`;
    } else {
      const nextBottles = numberOfBottles - 1;  // Calculate the number of bottles for the next verse

      // Add the current verse to the song lyrics and HTML code
      song += `<h1>${numberOfBottles} little bug${numberOfBottles !== 1 ? 's' : ''} in the code. ${numberOfBottles} little bug${numberOfBottles !== 1 ? 's' : ''}</h1>`;
  
      if (nextBottles > 0) {
        // If there are more bottles remaining, display the "Take one down, pass it around" link
        song += `<a href="/${nextBottles}">Take one down, patch it around</a>`;
      }
    }
  
     // Add the "Start over" link to redirect the user back to the home page
    song += `<br><br><a href="/">Start over</a>`;
  
    res.send(song); // Send the song lyrics and HTML code to the user
  });








//Listener
app.listen(3500, (req, res) => {
    console.log("Homework server running on port 3500!")
})