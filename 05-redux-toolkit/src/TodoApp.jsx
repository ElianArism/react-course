import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosAPI";

export const TodoApp = () => {
  // const { isLoading, data: todos = [] } = useGetTodosQuery();
  const [previousTodo, setTodo] = useState(1);
  const { isLoading, data: todo } = useGetTodoQuery(previousTodo);

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4> Is loading: {isLoading ? "true" : "false"} </h4>
      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={() => setTodo(previousTodo + 1)}>
        Next todo
      </button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <b>{todo.title}</b>
            <p>{todo.completed ? "DONE" : "Pending"}</p>
          </li>
        ))}
      </ul> */}
    </>
  );
};
