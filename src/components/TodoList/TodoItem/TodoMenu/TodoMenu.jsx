import classes from "./style.module.css";
import { IoMdCheckmark as CheckIcon } from "react-icons/io";
import { IoTrashOutline as DeleteICon } from "react-icons/io5";

const TodoMenu = ({closeMenu, todo, deleteTodo , completeTodo}) => {

  const handleCompleteTodo = () => {
    completeTodo(todo.id)
    setTimeout(() =>{
      closeMenu()
    },300 )
  }
  return (
    <div className={classes.menu}>
      <div
        className={`${classes.btn} ${classes.deleteBtn}`}
        onClick={() => deleteTodo(todo.id)}
      >
        <DeleteICon />
      </div>
      <div
        className={`${classes.btn} ${classes.completeBtn} ${
          todo.completed ? classes.completed : ""
        }`} 
        onClick={handleCompleteTodo}
      >
        <CheckIcon />
      </div>
    </div>
  );
};

export default TodoMenu;
