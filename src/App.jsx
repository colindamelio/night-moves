import "./App.css";
import GameBoard from "./components/GameBoard";
import TopNav from "./components/TopNav";
import useDarkMode from "./hooks/useDarkMode";

function App() {
	const [theme, setTheme] = useDarkMode();

	const toggleTheme = () => {
		const updatedTheme = theme === "light" ? "dark" : "light";
		setTheme(updatedTheme);
	};

	return (
		<div className="app" data-theme={theme}>
			<TopNav theme={theme} toggleTheme={toggleTheme} />		
			<GameBoard />
		</div>
	);
}

export default App;

// TODO
// - styling
// - game logic
// - hard mode