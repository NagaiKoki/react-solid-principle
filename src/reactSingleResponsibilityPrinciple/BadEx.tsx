import React, { useEffect, useState } from "react";
import axios from "axios";

type TodoType = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export const TodoList = () => {
  const [data, setData] = useState<TodoType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  if (isFetching) {
    return <p>...loading</p>;
  }

  return (
    <ul>
      {data.map((todo) => {
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