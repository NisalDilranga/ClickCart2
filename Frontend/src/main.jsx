import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StateContext } from "./context/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <App />
    </StateContext>
  </React.StrictMode>
);
