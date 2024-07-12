import React, { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
/* import Header from "./components/Header"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      { index: true, element: <App />,},
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
