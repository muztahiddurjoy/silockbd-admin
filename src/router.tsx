import { createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Tds from "./pages/Tds";
import Config from "./pages/Config";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

export const router = createBrowserRouter([{
    path: "/",
    element: <Products />
},
{
    path:'/tds',
    element:<Tds/>
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
}])