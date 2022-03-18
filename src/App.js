import "./App.css";
import Counter from "./Counter";
import useStore from "./store";

function App() {
  const { count } = useStore();
  const increase = useStore((state) => state.inc);
  return (
    <div className="App">
      <div>{count}</div>
      <Counter />
      <button onClick={increase}>click me</button>
      {/* <button onClick={des}>click me</button> */}
    </div>
  );
}

export default App;
