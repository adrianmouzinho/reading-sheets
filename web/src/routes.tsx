import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Services } from "./pages/Services";
import { Default } from "./layouts/Default";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Navigate to='/dashboard' />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    
      {
        path: '/services',
        element: <Services />
      }
    ],
  }, {
    path: '/login',
    element: <Login />
  }
])