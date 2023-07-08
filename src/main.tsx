import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Login } from "./Pages/Login/Login";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:'home',
    element:<App/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);