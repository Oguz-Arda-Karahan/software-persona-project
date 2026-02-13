
import TodoItem from "./TodoItem";

function TodoList({ tasks, deleteTodo, updateTodo }) {
  return (
    <ul className="list-group">
      {tasks.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
