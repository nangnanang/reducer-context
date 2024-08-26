import AddForm from "./components/AddForm";
import List from "./components/List";

import { useReducer, useState } from "react";
import { TodoContext } from "./context/TodoContext.jsx";
import { initialState, todoReducer } from "./reducer.js";

const ContextApp = () => {
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
      <AddForm />
      <List />
    </TodoContext.Provider>
  );
};

export default ContextApp;
