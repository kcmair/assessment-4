const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

app.get("/api/compliment", (req, res) => {  

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A fresh start will put you on your way.",
    "From listening comes wisdom and from speaking repentance.",
    "It is better to be an optimist and proven a fool than to be a pessimist and be proven right.",
    "Physical activity will dramatically improve your outlook today.",
    "Pick battles big enough to matter, small enough to win."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

});

app.put("/api/addCompliment", (req, res) => {
  const {compliment} = req.body
  compliments.push(compliment);
  res.status(200).send(`${compliment} has been added to the list of compliments.`);
});

app.listen(4000, () => console.log("Server running on 4000"));
