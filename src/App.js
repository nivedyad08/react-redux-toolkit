import logo from "./logo.svg";
import "./App.css";
import store from "./redux-toolkit/store";
import Counter from "./components/Counter";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
