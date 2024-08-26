import AddForm from "./components/AddForm";
import List from "./components/List";

import { TodoProvider } from "./context/TodoContext.jsx";
const ContextApp = () => {
  return (
    <TodoProvider>
      <AddForm />
      <List />
    </TodoProvider>
  );
};

export default ContextApp;
