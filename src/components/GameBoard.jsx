import { useState } from "react";
import { words, getRandomAnswer } from "../data/words";
import Banner from "./Banner";
import WordGrid from "./WordGrid";
import WordInput from "./WordInput";

function GameBoard() {
	const [answer, setAnswer] = useState(getRandomAnswer(words));
	const [guessedWords, setGuessedWords] = useState([]);
	const [progress, setProgress] = useState("playing");

	const handleSubmittedGuess = (guess) => {
		const newGuessedWords = [...guessedWords, guess];
		setGuessedWords(newGuessedWords);

		if (guess === answer) {
			setProgress("won");
		} else if (newGuessedWords.length >= 6) {
			setProgress("lost");
		}
	};

	const handleReset = () => {
		setProgress("playing");
		setGuessedWords([]);
		const newAnswer = getRandomAnswer(words);
		setAnswer(newAnswer);
	};

	return (
		<main>
			{progress !== "playing" && (
				<Banner progress={progress} handleReset={handleReset} />
			)}
			<div className="gameWrapper">
				<WordGrid guessedWords={guessedWords} answer={answer} />
				<WordInput
					handleSubmittedGuess={handleSubmittedGuess}
					progress={progress}
				/>
			</div>
		</main>
	);
}

export default GameBoard;
