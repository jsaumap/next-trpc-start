"use client";
import { trpc } from "../_trpc/client";

const TodoList = () => {
  const getTodos = trpc.getTodos.useQuery();
  if (getTodos.error) {
    return <div>{getTodos.error.message}</div>;
  }
  if (getTodos.status === "pending") {
    return <div>Loading...</div>;
  }
  return <div>{JSON.stringify(getTodos.data)}</div>;
};

export default TodoList;
