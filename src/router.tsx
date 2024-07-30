import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Config from "./pages/Config";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";

export const router = createBrowserRouter([
    {
    path: "/",
    element: <Products />
},
{
    path:'/categories',
    element:<Categories/>
},
{
    path:'/config',
    element:<Config/>
},
{
    path:'/contact',
    element:<Contact/>
},
{
    path:'/login',
    element:<Login/>
},{
    path:'/orders',
    element:<Orders/>
},{
    path:'/add-product',
    element:<AddProduct/>
}])