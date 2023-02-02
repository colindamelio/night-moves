import { range } from "./utils/helpers.js";

function App() {
  return (
    <div className="app">
      <h1>Night Moves</h1>
      {range(0, 5).map((item: number) => (
        <p key={item}>item: {item}</p>
      ))}
    </div>
  );
}

export default App;
