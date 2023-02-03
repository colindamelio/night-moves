function TopNav({theme, toggleTheme}) {
	return (
		<nav>
			<ul>
				<li>
					<h1>Night Moves</h1>
				</li>
				<li>
					<button onClick={toggleTheme}>
						{theme === "dark" ? "light" : "dark"}
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default TopNav;