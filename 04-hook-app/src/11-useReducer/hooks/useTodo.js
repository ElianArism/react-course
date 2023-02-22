import { useEffect, useReducer } from "react";
import * as Actions from "../actions/todoActions";
import { todoReducer } from "../todoReducer";

const initTodos = () =>
  JSON.parse(localStorage.getItem("todos")) || [];

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (todo) => {
    dispatch({ type: Actions.ADD_TODO, payload: todo });
  };

  const removeTodo = (todoId) => {
    dispatch({
      type: Actions.REMOVE_TODO,
      payload: todoId,
    });
  };

  const toggleTodoStatus = (todoId) => {
    dispatch({
      type: Actions.TOGGLE_TODO,
      payload: todoId,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    incompletedTodos: todos.filter(({ done }) => !done).length,
    addNewTodo,
    removeTodo,
    toggleTodoStatus,
  };
};
