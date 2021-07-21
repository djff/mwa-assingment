require("dotenv").config();
const path = require("path");
const express = require("express");
const games = require("./public/data/games.json");

const app = express();

app.use(express.static(path.join(__dirname, process.env.PUBLIC_FOLDER)));

app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, process.env.PUBLIC_FOLDER, "index.html"));
});

app.get("/games", (req, res) => {
    res.status(200).json(games);
});

const server = app.listen(process.env.PORT, () => {
    console.log("Listening to port:", server.address().port);
});