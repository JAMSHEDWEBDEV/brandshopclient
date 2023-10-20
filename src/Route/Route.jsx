
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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<PageNotFound></PageNotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:()=>fetch('/category.json')
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:"/update/:id",
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(` https://grocerry-shop-server-bqznutw8g-md-jamshed-mias-projects.vercel.app/products/${params.id}`)

            },
            {
                path:"/myCart",
                element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader:()=>fetch(' https://grocerry-shop-server-bqznutw8g-md-jamshed-mias-projects.vercel.app/products')
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