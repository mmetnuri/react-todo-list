import { useState } from "react";
import classes from "./style.module.css";
import { IoIosAdd as AddIcon } from "react-icons/io";
import { motion } from "framer-motion";

const variants = {
  open: {
    right: "50%",
    width: 500,
    height: 70,
    opacity: 1,
    transition: {
      right: {
        ease: "easeInOut",
        duration: 0.5,
      },
      width: {
        duration: 0.5,
        delay: 0.5,
      },
      height: {
        duration: 0.5,
        delay: 0.5,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
  close: {
    right: "0%",
    width: 30,
    height: 30,
    opacity: 0,
    transition: {
      right: {
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.3,
      },
      width: {
        duration: 0.3,
        delay: 0,
      },
      height: {
        duration: 0.3,
        delay: 0,
      },
      opacity: {
        duration: 0.1,
        delay: 0.7,
      },
    },
  },
};

const TodoInput = ({ addNewTodo }) => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    addNewTodo(text);
    setText("");
    setIsOpen(false);
  };
  return (
    <div className={classes.inputContainer}>
      <motion.form
        initial={false}
        animate={isOpen ? "open" : "close"}
        variants={variants}
        className={`${classes.inputForm} ${isOpen ? classes.open : ""}`}
        onSubmit={handleAddTodo}
      >
        <input
          type="text"
          placeholder="add new todo"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </motion.form>
      <button
        className={classes.addButton}
        onClick={(e) => (isOpen ? handleAddTodo(e) : setIsOpen(true))}
      >
        {isOpen ? "Add" : <AddIcon size={30} />}
      </button>
    </div>
  );
};

export default TodoInput;
