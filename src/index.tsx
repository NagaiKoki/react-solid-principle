import React from "react";
import ReactDOM from "react-dom";
import { Todo } from "./reactDependencyInversionPrinciple/GoodEx";

ReactDOM.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);
