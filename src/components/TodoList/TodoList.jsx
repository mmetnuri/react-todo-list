import classes from "./style.module.css";
import TodoItem from "./TodoItem/TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <motion.div className={classes.todoList}>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TodoList;
