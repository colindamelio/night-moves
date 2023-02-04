function Letter({ letter, status }) {
	return <span className={letter ? "active" : ""}>{letter}</span>;
}

export default Letter;
