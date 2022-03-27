import { Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <>
      <Route path="/" component={Main} exact />
    </>
  );
}

export default App;
