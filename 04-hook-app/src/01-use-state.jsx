import { useState } from "react";

export const CounterApp = () => {
  const [{ counter1, counter2, counter3 }, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  return (
    <>
      <div className="container-fluid px-3">
        <div className="row">
          <div className="col-3">
            <button
              onClick={() =>
                setCounter((state) => ({
                  ...state,
                  counter1: state.counter1 + 1,
                }))
              }
            >
              + 1
            </button>
            <p>Counter: {counter1}</p>
          </div>
          <div className="col-3">
            <button
              onClick={() =>
                setCounter((state) => ({
                  ...state,
                  counter2: state.counter2 + 1,
                }))
              }
            >
              + 1
            </button>{" "}
            <p>Counter: {counter2}</p>
          </div>

          <div className="col-3">
            <button
              onClick={() =>
                setCounter((state) => ({
                  ...state,
                  counter3: state.counter3 + 1,
                }))
              }
            >
              + 1
            </button>{" "}
            <p>Counter: {counter3}</p>
          </div>
        </div>
      </div>
    </>
  );
};
