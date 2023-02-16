import { TodoList } from '../TodoList/TodoList';
// import { Filter } from '../pages/Filter';
import { useFetchTodosQuery, useDeleteTodosMutation } from '../redux/todos';
import { useState } from 'react';

export const Todos = () => {
  const { data: todos } = useFetchTodosQuery();
  const [deleteTodos, { isLoading: isDeleting }] = useDeleteTodosMutation();

  const [search, setSearch] = useState('');

  const onChangeInput = e => {
    const text = e.currentTarget.elements.filter.value;
    setSearch(text);
  };

  const sortedContacts = () => {
    console.log(todos.filter(todo => todo.name.toLowerCase().includes(search)));
    return todos.filter(todo => todo.name.toLowerCase().includes(search));
  };

  return (
    <div>
      {todos && (
        <>
          <form onChange={onChangeInput}>
            <input type="text" placeholder="Search" name="filter" />
          </form>
          {/* <Filter onChange={onChangeInput} /> */}
          <TodoList
            todos={sortedContacts()}
            onDelete={deleteTodos}
            deleting={isDeleting}
          />
        </>
      )}
    </div>
  );
};
