import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import store from "./toolkit/store.js";
import {Provider} from 'react-redux'
import ProductPage from "./pages/ProductPage.jsx";
import AdminPage from "./pages/AdminPages/AdminPage.jsx";
import UsersDataPage from "./pages/AdminPages/UsersDataPage.jsx";
import ProductsDataPage from "./pages/AdminPages/ProductsDataPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/shop',
        element: <Shop/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/signIn',
        element: <SignIn/>
      },
      {
        path: '/signUp',
        element: <SignUp/>
      },
      {
        path:'/productPage/:proId',
        element: <ProductPage/>
      }
    ]
  },
  {
    path: '/adminPage',
    element: <AdminPage/>,
    children: [
      {
        path: '/adminPage',
        element: <UsersDataPage/>
      },
      {
        path: '/adminPage/productsDataPage',
        element: <ProductsDataPage/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
</Provider>

);
