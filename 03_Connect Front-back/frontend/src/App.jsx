import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		fetch("/api/message")
			.then((response) => response.json())
			.then((data) => setJokes(data));
	});

	return (
		<div>
			<h1>Sahil Chai</h1>
			{jokes.map((joke, idx) => (
				<div key={idx}>
					<h3>{joke.title}</h3>
					<p>{joke.joke}</p>
				</div>
			))}
		</div>
	);
}

export default App;
