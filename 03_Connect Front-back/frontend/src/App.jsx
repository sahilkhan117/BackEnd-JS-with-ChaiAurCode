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
		
	);
}

export default App;
