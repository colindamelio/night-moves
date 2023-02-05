// create a range of array items
export const range = (start, stop, step = 1) => {
	return Array.from(
		{ length: (stop - start) / step + 1 },
		(value, i) => start + i * step
	);
};

// compare guessed word with answer
// provide comparison of each letter to return a correct/incorrect status
export function check(guess, answer) {
	if (!guess) return;

	let splitGuess = guess.split("");
	let splitAnswer = answer.split("");

	return splitGuess.map((letter) => {
		let status;

		if (splitAnswer.includes(letter)) {
			if (splitAnswer.indexOf(letter) === splitGuess.indexOf(letter)) {
				status = "correct";
			} else {
				status = "mismatch";
			}
		} else {
			status = "incorrect";
		}
		return {
			letter,
			status,
		};
	});
}
