import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ContextApp from "./ContextApp";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ContextApp />
  </StrictMode>
);
