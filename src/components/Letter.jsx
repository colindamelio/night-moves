function Letter({ letter, status }) {
	return <span className={letter ? `active ${status}` : ""}>{letter}</span>;
}

export default Letter;
