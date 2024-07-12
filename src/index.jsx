import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Profilo from "./pages/Profilo"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      { path: "/", index: true, element: <App /> },

      {
        path: '/Profilo',
        element: <Profilo />,
      },
      /* {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      }, */
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