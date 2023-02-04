import Word from "./Word";
import { range } from "../utils/helpers";

function WordGrid({ guessedWords, answer}) {

	return (
		<div>
			{range(0, 4).map((number) => (
				<Word key={number} word={guessedWords[number]} answer={answer} />
			))}
		</div>
	);
}

export default WordGrid;
