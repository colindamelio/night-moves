import Word from "./Word";
import { range } from "../toolbox/helpers";

function WordGrid({ guessedWords, answer }) {
	return (
		<>
			{range(0, 5).map((number) => (
				<Word key={number} guess={guessedWords[number]} answer={answer} />
			))}
		</>
	);
}

export default WordGrid;
