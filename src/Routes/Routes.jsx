import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Products from "../Pages/Home/Products/Products";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import AddServices from "../Pages/AddServices/AddServices";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/addService',
                element: <AddServices></AddServices>,
            },
            {
                path: '/bookings',
                element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Products></Products>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
        ]
    },
]);

export default router;