import useLocalStorage from "use-local-storage";

function useDarkMode() {
	const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [theme, setTheme] = useLocalStorage(
		"theme",
		defaultDark ? "dark" : "light"
	);

	return [theme, setTheme];
}

export default useDarkMode;
