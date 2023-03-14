import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
  const { counter, times } = useSelector((state) => state.counter);
  const [inputValue, setinputValue] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1> Counter is {counter} </h1>
      <h4> Counter has changed {times} times. </h4>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <div
          style={{
            width: 300,
            display: "flex",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <input
            type="number"
            onChange={(e) => setinputValue(Number(e.target.value))}
          />
          <button
            onClick={() => dispatch(incrementByAmount(inputValue))}
          >
            incrementBy {inputValue}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
