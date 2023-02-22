import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";

const doHeavyStuff = (value) => {
  for (let i = 0; i < value; i++)
    console.log(`loading ${value} assets`);
  return "loading completed." + ` ${value} assets loaded.`;
};

export const UseMemoExample = () => {
  const { counter, increment, decrement } = useCounter(10);
  const [bool, setBool] = useState(false);

  /**
   * Memoriza doHeavyStuff para no realizar el proceso a no ser que sus deps (counter) cambie
   * de no hacerlo de esta forma siempre que cambie algo en el padre directo, o que cualquier otra
   * dependencia (el use state del boolean por ejemplo) cambie tambien se realizaria esta accion
   * Use memo permite memorizar cualquier tipo de dato, y es utilizado cuando se pretende utilizar el valor de retorno de la funcion
   */
  const memorizedValue = useMemo(
    () => doHeavyStuff(counter),
    [counter]
  );

  return (
    <div className="d-flex flex-column">
      <p>Memo - React</p>

      <p className="my-1 text-center">
        Counter: <small>{counter}</small>
      </p>

      <div className="d-flex justify-content-around mx-auto my-3">
        <button onClick={increment} className="btn btn-primary">
          increment
        </button>
        <button onClick={decrement} className="btn btn-primary">
          decrement
        </button>
      </div>

      <p>{memorizedValue}</p>

      {/* Para demostrar redibujos en el hijo (Small)  */}
      <button className="w-25" onClick={() => setBool(!bool)}>
        Set boolean
      </button>
      <p>{JSON.stringify(bool)}</p>
    </div>
  );
};
