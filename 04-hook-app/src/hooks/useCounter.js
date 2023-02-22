import { useState } from "react";

export const useCounter = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => {
    if (counter > initValue) {
      setCounter(counter - 1);
    }
  };
  const reset = () => setCounter(0);

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
