import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffe from "./components/AddCoffe.jsx";
import UpdateCoffe from "./components/UpdateCoffe.jsx";
import AllCoffe from "./components/AllCoffe.jsx";
import SignUp from "./components/SignUp.jsx";
import Signin from "./components/Signin.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addCoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/allCoffe",
    element: <AllCoffe></AllCoffe>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
