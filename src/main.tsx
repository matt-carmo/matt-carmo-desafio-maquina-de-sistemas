import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Login } from "./Pages/Login/Login";
import App from "./App";
import ApexChart from "./Pages/Chart/Chart";
import { Footer } from "./components/Footer/Footer";
import { SignIn } from "./Pages/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "sign-in",
    element:<SignIn/>
  },
  {
    path: "home",
    element: <App />,
  },
  {
    path: "chart/:name/:price/:percentage_change/:ticker/:currency/:value",
    element: <ApexChart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>
);
