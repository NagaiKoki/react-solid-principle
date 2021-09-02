import { useFetchTodo } from "./useFetchTodo";

export const TodoList = () => {
  const { todo, isFetching } = useFetchTodo();

  if (isFetching) {
    return <p>...loading</p>;
  }

  return (
    <ul>
      {todo.map((todo) => {
        return (
          <li>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        );
      })}
    </ul>
  );
};
