import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import AddProduct from "./pages/AddProduct";
import Categories from "./pages/Categories";
import News from "./pages/News";
import Services from "./pages/Services";

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
    path:'/contact',
    element:<Contact/>
},
{
    path:'/news',
    element:<News/>
},
{
    path:'/services',
    element:<Services/>
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