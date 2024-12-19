import express from "express";
const app = express();
const PORT = 3000;

const Myjokes = [
	{id: 1, title: "1st Joke", joke: "Joke One"},
	{id: 2, title: "2nd Joke", joke: "Joke Two"},
	{id: 3, title: "3rd Joke", joke: "Joke Three"},
	{id: 4, title: "4th Joke", joke: "Joke Four"},
	{id: 5, title: "5th Joke", joke: "Joke Five"},
	{id: 6, title: "6th Joke", joke: "Joke Six"},
	{id: 7, title: "7th Joke", joke: "Joke Seven"},
  ]

  // Define a simple API route
app.get("/api/message", (req, res) => {
	res.json(Myjokes);
});