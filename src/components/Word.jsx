import { range } from "../utils/helpers";
import Letter from "./Letter";

function Word({ word }) {
	return (
		<p className="row">
			{range(0,4).map(num => (
				<Letter key={num} word={word} num={num} />
			))}
		</p>
	);
}

export default Word;
