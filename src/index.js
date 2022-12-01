import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
//import App from './App';
//import Login from './Login';
import ErrorPage from './Error';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import NewUser from './Newuser';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
    errorElement: <ErrorPage />
  },
  {
    path: '/newuser',
    element:  <NewUser />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
