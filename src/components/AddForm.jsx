import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const AddForm = () => {
  const todo = useContext(TodoContext).todo;
  const setTodo = useContext(TodoContext).setTodo;

  const addEventHandler = useContext(TodoContext).addEventHandler;
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addEventHandler}>추가</button>
    </div>
  );
};

export default AddForm;
