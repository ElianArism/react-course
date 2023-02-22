import PropTypes from "prop-types";
import React from "react";

export const TodoList = ({
  todos,
  onRemoveTodo,
  onToggleTodoStatus,
}) => {
  return (
    <ul className="list-group">
      {todos.map(({ id, description, done }) => (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between"
        >
          <span
            className={`align-self-center cursor-pointer ${
              done ? "text-decoration-line-through" : ""
            }`}
            onClick={() => onToggleTodoStatus(id)}
          >
            {description}
          </span>
          <button
            className="btn btn-danger"
            onClick={() => onRemoveTodo(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodoStatus: PropTypes.func.isRequired,
};
