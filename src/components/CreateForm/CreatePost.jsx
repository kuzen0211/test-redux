import { useCreateTodosMutation } from 'components/redux/todos';

export const CreatePost = () => {
  const [createTodos, result] = useCreateTodosMutation();

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };
    createTodos(obj);

    e.currentTarget.reset();
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="number" placeholder="Number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
