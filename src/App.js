import React from "react";
import { render } from "react-dom";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista de proyectos de GitHub!"),
    React.createElement("h2", {}, "Abajo")
  );
};

render(React.createElement(App), document.getElementById("root"));
