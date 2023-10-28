import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Services from "../Pages/Home/Services/Services";
import Products from "../Pages/Home/Products/Products";
import ChooseUs from "../Pages/Home/ChooseUs/ChooseUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: '/service',
                element: <Services></Services>,
            }, {
                path: '/blog',
                element: <Products></Products>,
            },
            {
                path: '/contact',
                element: <ChooseUs></ChooseUs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
        ]
    },
]);

export default router;