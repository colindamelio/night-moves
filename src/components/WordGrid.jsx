import Word from "./Word";
import { range } from "../utils/helpers";

function WordGrid({ guessedWords }) {
	return (
		<div>
			{range(0, 4).map((number) => (
				<Word key={number} word={guessedWords[number]} />
			))}
		</div>
	);
}

export default WordGrid;
