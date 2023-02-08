function Banner({ progress, handleReset }) {
	return (
		<div className="banner-box" role="alert">
			<h2>
				{progress === "won" ? "Winner" : null}
				{progress === "lost" ? "Nice Try" : null}
			</h2>
			<button onClick={handleReset}>play again?</button>
		</div>
	);
}

export default Banner;
