import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CatPage from './pages/CatPage.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sign from './pages/Sign/Sign.jsx'
import Admin from './pages/Admin/Admin.jsx'
import Login from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/category/:type',
        element: <CatPage />
      }
    ]
  },
  {
    path: 'sign',
    element: <Sign/>
  },
  {
    path: 'admin',
    element: <Admin/>
  },
  {
    path: 'login',
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
