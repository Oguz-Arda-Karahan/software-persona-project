import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Yeni görev ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Ekle
      </button>
    </form>
  );
}

export default TodoForm;
