import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Main/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SignUp from './signUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[

      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {

        path:"/SignUp",
        element:<SignUp></SignUp>
        
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />

  </StrictMode>,
)
