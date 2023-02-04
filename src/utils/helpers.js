// create a range of array items
export const range = (start, stop, step = 1) => {
	return Array.from(
		{ length: (stop - start) / step + 1 },
		(value, i) => start + i * step
	);
};

// compare guessed word with answer
// provide comparison of each letter to return a correct/incorrect status
export const check = (guess, answer) => {
	if (!guess) return;

	const guessLetters = guess.split("");
	const answerLetters = new Set(answer.split(""));

	return guessLetters.map((letter) => ({
		letter,
		status: answerLetters.has(letter)
			? "correct"
			: answer.includes(letter)
			? "misplaced"
			: "incorrect",
	}));
};
