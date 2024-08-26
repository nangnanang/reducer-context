import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const List = () => {
  const state = useContext(TodoContext).state;
  const deleteEventHandler = useContext(TodoContext).deleteEventHandler;
  return (
    <div>
      {state.map((element) => {
        return (
          <div key={element.id}>
            <li>{element.todo}</li>
            <button
              value={element.id}
              onClick={() => {
                deleteEventHandler(element);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
