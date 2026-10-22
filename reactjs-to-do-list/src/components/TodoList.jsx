import TodoCard from './TodoCard';

export default function TodoList() {
  const todos = [
    'Learn React',
    'Learn React Router',
    'Learn React Redux',
  ];

  return (
    <ul className="main">
      {todos.map((todo) => (
        <TodoCard key={todo} todo={todo} />
      ))}
    </ul>
  );
}
