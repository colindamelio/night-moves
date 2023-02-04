import { useState } from "react";
import { answer } from "../data/words";
import WordGrid from "./WordGrid";
import WordInput from "./WordInput";

function GameBoard() {
	const [guessedWords, setGuessedWords] = useState([]);

	const handleSubmittedGuess = (guess) => {
		const newGuessedWords = {
			value: guess,
			id: crypto.randomUUID(),
		}
		setGuessedWords([...guessedWords, newGuessedWords]);
	};

	return (
		<main>
			<WordGrid guessedWords={guessedWords} answer={answer} />
			<WordInput handleSubmittedGuess={handleSubmittedGuess} />
		</main>
	);
}

export default GameBoard;
