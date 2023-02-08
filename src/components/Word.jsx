import { range, check } from "../toolbox/helpers";
import Letter from "./Letter";

function Word({ guess, answer }) {
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
