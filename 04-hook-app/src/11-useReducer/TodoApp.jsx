import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    incompletedTodos,
    addNewTodo,
    removeTodo,
    toggleTodoStatus,
  } = useTodo();

  return (
    <>
      <h1>
        Todos ({todosCount})
        <small>pending ({incompletedTodos})</small>
      </h1>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={removeTodo}
            onToggleTodoStatus={toggleTodoStatus}
          ></TodoList>
        </div>
        <div className="col-5">
          <TodoForm onAddTodo={addNewTodo}></TodoForm>
        </div>
      </div>
    </>
  );
};
