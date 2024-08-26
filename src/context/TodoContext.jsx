import { createContext, useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducer";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
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
    <TodoContext.Provider
      value={{ todo, setTodo, state, addEventHandler, deleteEventHandler }}
    >
      {children}
    </TodoContext.Provider>
  );
};
