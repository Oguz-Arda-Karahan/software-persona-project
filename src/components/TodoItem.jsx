import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control me-2"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
            Kaydet
          </button>
        </>
      ) : (
        <span>{todo.text}</span>
      )}

      <div>
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => setIsEditing(!isEditing)}
        >
          Güncelle
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTodo(todo.id)}
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
