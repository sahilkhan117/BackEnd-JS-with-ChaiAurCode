require('dotenv').config() // dotenv 

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.get("/ok", (req, res) => {
	res.send("<h1>ok</h1>");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${process.env.PORT}!`);
});
