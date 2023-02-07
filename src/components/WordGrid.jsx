import Word from "./Word";
import { range } from "../toolbox/helpers";

function WordGrid({ guessedWords }) {
	return (
		<>
			{range(0, 5).map((number) => (
				<Word key={number} word={guessedWords[number]} />
			))}
		</>
	);
}

export default WordGrid;
