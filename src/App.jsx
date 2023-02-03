import "./App.css";
import GameBoard from "./components/GameBoard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
	const [theme, setTheme] = useDarkMode();

	const toggleTheme = () => {
		const updatedTheme = theme === "light" ? "dark" : "light";
		setTheme(updatedTheme);
	};

	return (
		<div className="app" data-theme={theme}>
			<button onClick={toggleTheme}>
				{theme === "dark" ? "light" : "dark"}
			</button>
			<h1>Night Moves</h1>
			<GameBoard />
		</div>
	);
}

export default App;
