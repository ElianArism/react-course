import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment, decrement } = useCounter(10);
  const [bool, setBool] = useState(false);

  return (
    <div className="d-flex flex-column">
      <p>Memo - React</p>

      <p className="my-1 text-center">
        Counter: <Small counter={counter}></Small>
      </p>

      <div className="d-flex justify-content-around mx-auto my-3">
        <button onClick={increment} className="btn btn-primary">
          increment
        </button>
        <button onClick={decrement} className="btn btn-primary">
          decrement
        </button>
      </div>

      {/* Para demostrar redibujos en el hijo (Small)  */}
      <button className="w-25" onClick={() => setBool(!bool)}>
        Set boolean
      </button>
      <p>{JSON.stringify(bool)}</p>
    </div>
  );
};
