require("dotenv").config();
const express = require("express");

const app = express();

app.get("/:num", (req, res) => {
    const num1 = parseInt(req.params.num);
    let num2 = 0;

    if(req.query && req.query.num){
        num2 = parseInt(req.query.num);
    }

    res.status(200).send(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
})

const server = app.listen(process.env.PORT, () => {
    console.log("Listening to port: ", server.address().port);
})