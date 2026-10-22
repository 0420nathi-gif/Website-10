import { useState } from 'react';

export default function TodoCard({ todo, onUpdate, onToggle, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleSave(event) {
    event.preventDefault();
    const trimmedText = editText.trim();

    if (!trimmedText) {
      return;
    }

    onUpdate(todo.id, trimmedText);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditText(todo.text);
    setIsEditing(false);
  }

  return (
    <li className="todoItem">
      {isEditing ? (
        <form className="todoEditForm" onSubmit={handleSave}>
          <input
            type="text"
            aria-label={`Edit ${todo.text}`}
            value={editText}
            onChange={(event) => setEditText(event.target.value)}
            autoFocus
          />
          <button type="submit" aria-label="Save changes" title="Save">
            <i className="fa-solid fa-check" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            aria-label="Cancel editing"
            title="Cancel"
            onClick={handleCancel}
          >
            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </form>
      ) : (
        <>
          <label className={`todoText${todo.completed ? ' completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              aria-label={`Mark ${todo.text} as ${todo.completed ? 'incomplete' : 'complete'}`}
            />
            <span>{todo.text}</span>
          </label>
          <div className="actionsContainer">
            <button
              type="button"
              aria-label={`Edit ${todo.text}`}
              title="Edit"
              onClick={() => {
                setEditText(todo.text);
                setIsEditing(true);
              }}
            >
              <i className="fa-solid fa-pen-to-square" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="deleteButton"
              aria-label={`Delete ${todo.text}`}
              title="Delete"
              onClick={() => onDelete(todo.id)}
            >
              <i className="fa-solid fa-trash" aria-hidden="true"></i>
            </button>
          </div>
        </>
      )}
    </li>
  );
}
