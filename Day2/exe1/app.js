const express = require("express");
require("dotenv").config();

const app = express();

const server = app.listen(process.env.PORT, () => {
    console.log("App is listening to port", server.address().port);
})