import { useEffect, useState } from "react";

export default function useLocalStorage(initialValue) {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || initialValue
  );

  //Set Todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return [todos, setTodos];
}
   