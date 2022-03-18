import "./App.css";
import Counter from "./Counter";
import useStore from "./store";
import Mp from "./Mp";

function App() {
  const { count } = useStore();
  const increase = useStore((state) => state.inc);
  const decrease = useStore((state) => state.dec);

  return (
    <div className="App">
      <div>나이 {count}</div>
      <Counter />
      <button onClick={increase}>click me</button>
      <button onClick={decrease}>click me</button>
      <Mp />
    </div>
  );
}

export default App;
