import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Services } from "./pages/Services";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Dashboard />
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
  }
])