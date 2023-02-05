import { range, check } from "../utils/helpers";
import { answer } from "../data/words";
import Letter from "./Letter";

function Word({ word }) {
	const guess = word?.value;
	const result = check(guess, answer);

	return (
		<p className="row">
			{range(0, 4).map((num) => (
				<Letter
					key={num}
					letter={result ? result[num].letter : null}
					status={result ? result[num].status : null}
				/>
			))}
		</p>
	);
}

export default Word;
