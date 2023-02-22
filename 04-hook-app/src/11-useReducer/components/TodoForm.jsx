import PropTypes from "prop-types";
import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    onAddTodo({
      description: inputValue,
      id: Date.now(),
      done: false,
    });
  };

  return (
    <>
      <h3>Add todo</h3>
      <hr />

      <form
        onSubmit={addTodo}
        className="d-flex justify-content-between align-items-center"
      >
        <input
          type="text"
          placeholder="add new todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Add new todo
        </button>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
