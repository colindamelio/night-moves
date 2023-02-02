import './App.css';
import useLocalStorage from "use-local-storage";
import { range } from "./utils/helpers.js";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toggleMode = () => {
    const updatedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(updatedTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <button onClick={toggleMode}>{theme === 'dark' ? 'light' : 'dark'}</button>
      <h1>Night Moves</h1>
      {range(0, 5).map((item: number) => (
        <p key={item}>item: {item}</p>
      ))}
    </div>
  );
}

export default App;
