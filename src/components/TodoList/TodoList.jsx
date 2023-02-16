export const TodoList = ({ todos, onDelete, deleting }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <p>{todo.name}</p>
          <p>{todo.number}</p>
          <button onClick={() => onDelete(todo.id)}>
            {deleting ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
};
