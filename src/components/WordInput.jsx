import { useState } from "react";

function WordInput({ handleSubmittedGuess, progress }) {
	const [input, setInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (input.length < 5) return;
		handleSubmittedGuess(input);
		setInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="word-input">
				Guess A Word:
			</label>
			<input
				id="word-input"
				type="text"
				placeholder="pick a word..."
				maxLength={5}
				minLength={5}
				value={input}
				onChange={(e) => setInput(e.target.value.toUpperCase())}
				disabled={progress !== 'playing'}
			/>
		</form>
	);
}

export default WordInput;
