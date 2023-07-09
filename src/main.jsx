import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/home.jsx";
import Projetos from "./Projetos/projetos.jsx";
import Contactos from "./Contactos/contactos.jsx";
import "./styles/all.css";
import "./styles/icons.css";
import "./styles/base.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Projetos",
    element: <Projetos />,
  },
  {
    path: "/Contactos",
    element: <Contactos />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
