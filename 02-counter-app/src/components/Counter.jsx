import PropTypes from "prop-types";
import React, { useState } from "react";

export const Counter = ({ value = 0 }) => {
  const [counter, setValue] = useState(value);
  const changeCurrentValue = (val) => setValue(counter + val);
  return (
    <>
      <h2>Counter App</h2>
      <p>{counter}</p>
      <button onClick={(ev) => changeCurrentValue(+1)}> + 1 </button>
      <button onClick={(ev) => changeCurrentValue(-1)}> - 1 </button>
      <button onClick={(ev) => setValue(value)}> Reset </button>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired,
};
