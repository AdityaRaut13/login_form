/** @format */

import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Greet from "./Greet";

export const route = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
    },
    {
        path:'/greet',
        element:<Greet/>
    }
])
