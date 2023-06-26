import { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

const TODOS_DATA = [
  {
    id: 1,
    text: "please ",
    completed: false,
  },
  {
    id: 2,
    text: "please a",
    completed: false,
  },
  {
    id: 3,
    text: "please b",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(TODOS_DATA);

  //ADD NEW TODO
  const addNewTodo = (todoText) => {
    setTodos([
      {
        id: uuidv4,
        text: todoText,
        completed: false,
      },
      ...todos,
    ]);
  };

  //DELETE TODO
  const deleteTodo = (todoId) => {
    setTodos((curr) => curr.filter((todo) => todo.id !== todoId));
  };

  //COMPLETE TODO
  const completeTodo = (todoId) => {
    setTodos((curr) =>
      curr.map((todo) =>
        todo.id === todoId ? { ...todo, completed: todo.completed ? false : true } : todo
      )
    );
  };
  return (
    <div className="container">
      <h1>TODO APP</h1>
      {/* TODO LIST */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      {/* TODO INPUT */}
      <TodoInput addNewTodo={addNewTodo} />
    </div>
  );
}

export default App;
