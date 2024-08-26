import { useReducer, useState } from "react";
import { initialState, todoReducer } from "./reducer";

const App = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const addEventHandler = () => {
    dispatch({
      type: "ADD_BTN",
      payload: { todo, id: new Date().getTime() },
    });
    setTodo("");
  };
  const deleteEventHandler = (element) => {
    dispatch({
      type: "DELETE_BTN",
      payload: element,
    });
  };
  return (
    <div>
      <div>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addEventHandler}>추가</button>
      </div>
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
    </div>
  );
};

export default App;
