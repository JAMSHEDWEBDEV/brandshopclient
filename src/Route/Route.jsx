
import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"/myCart",
                element:<MyCart></MyCart>
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            }
        ]

    }
])

export default Route;