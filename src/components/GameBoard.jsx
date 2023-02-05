import { useState } from "react";
import WordGrid from "./WordGrid";
import WordInput from "./WordInput";

function GameBoard() {
	const [guessedWords, setGuessedWords] = useState([]);

	const handleSubmittedGuess = (guess) => {
		const newGuessedWords = {
			value: guess,
			id: crypto.randomUUID(),
		};
		setGuessedWords([...guessedWords, newGuessedWords]);
	};

	return (
		<main>
			<div className="wrapper">
				<WordGrid guessedWords={guessedWords} />
				<WordInput handleSubmittedGuess={handleSubmittedGuess} />
			</div>
		</main>
	);
}

export default GameBoard;
