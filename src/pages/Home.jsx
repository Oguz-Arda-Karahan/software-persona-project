import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTodo]);
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTasks(
      tasks.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Todo App</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList
        tasks={tasks}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Home;
