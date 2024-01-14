import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import Navbar from "./component/Navbar";
import Profile from "./pages/Profile";
import { Deposit } from "./pages/Deposit";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Transactions from "./pages/Transactions";
import Transfere from "./pages/Transfere_";
import Users from "./pages/Users";
import Withdraw from "./pages/Withdraw";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/transfere",
        element: <Transfere />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
