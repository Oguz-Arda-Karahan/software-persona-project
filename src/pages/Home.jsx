import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Home;
