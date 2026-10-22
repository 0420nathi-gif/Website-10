export default function TodoCard({ todo }) {
  return (
    <li className="todoItem">
      <p>{todo}</p>
      <i className="fa-solid fa-pen-to-square" aria-hidden="true"></i>
    </li>
  );
}
