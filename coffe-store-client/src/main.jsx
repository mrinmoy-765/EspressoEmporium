import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import AllCoffe from './components/AllCoffe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/addCoffe",
    element: <AddCoffe></AddCoffe>
  },
  {
    path: "/allCoffe",
    element: <AllCoffe></AllCoffe>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/updateCoffe",
    element: <UpdateCoffe></UpdateCoffe>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
