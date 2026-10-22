import { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onAddTodo(trimmedText);
    setText('');
  }

  return (
    <form className="todoInput" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter to do"
        aria-label="New to-do"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}