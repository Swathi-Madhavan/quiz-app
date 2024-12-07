import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainActivity from "./Components/MainActivity";
import Result from "./Components/Result";
import CplusPlus from "./Components/CplusPlus";
import Java from "./Components/Java";
import Python from "./Components/Python";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainActivity />,
    index: true,
  },
  {
    path: "/C++",
    element: <CplusPlus />,
  },
  {
    path: "/Java",
    element: <Java />,
  },
  {
    path: "/python",
    element: <Python />,
  },

  {
    path: "/result",
    element: <Result />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
