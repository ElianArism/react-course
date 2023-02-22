import { useCounter } from "./hooks/useCounter";

export const CounterWCustomHook = () => {
  // this is using a custom hook
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h6 className="text-center mb-4">
        Counter w custom hook: {counter}
      </h6>

      <div className="d-flex justify-content-around align-items-center w-100">
        <button onClick={increment}>+ 1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>- 1</button>
      </div>
    </>
  );
};
