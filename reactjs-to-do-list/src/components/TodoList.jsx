import TodoCard from './TodoCard';

export default function TodoList({
  todos,
  onUpdateTodo,
  onToggleTodo,
  onDeleteTodo,
}) {
  return (
    <ul className="main">
      {todos.length === 0 ? (
        <li className="emptyState">No tasks yet. Add one above.</li>
      ) : (
        todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onUpdate={onUpdateTodo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        ))
      )}
    </ul>
  );
}
