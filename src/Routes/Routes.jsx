import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../errorpage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Membership from "../Pages/Membership/Membership";

const myCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/membership',
                element: <Membership></Membership>
            },
            
        ]
    }


    
])

export default myCreatedRoutes;