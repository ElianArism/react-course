import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((valueToIncrement) => {
    setCounter((counter) => counter + valueToIncrement);
  }, []);

  return (
    <>
      <h1>Callback Hook Counter: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment}></ShowIncrement>
    </>
  );
};
