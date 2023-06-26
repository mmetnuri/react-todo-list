import classes from "./style.module.css";
import { IoIosMore as MoreIcon } from "react-icons/io";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";

import { useState } from "react";
import TodoMenu from "./TodoMenu/TodoMenu";
import { motion } from "framer-motion";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <motion.div
      className={classes.todoWrapper}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity:0
      }}
    >
      <div
        className={`${classes.todoItem} ${isOpen ? classes.open : " "}`}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#ccc" : "#333",
        }}
      >
        <span>{todo.text}</span>
        <div className={classes.actionBtn} onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MoreIcon />}
        </div>
      </div>
      <TodoMenu
        closeMenu={toggleMenu}
        todo={todo}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </motion.div>
  );
};

export default TodoItem;
