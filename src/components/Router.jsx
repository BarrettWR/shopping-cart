import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from "./Cart.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Router = () => { 
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
    ]);
    
    return <RouterProvider router={router} />;
}

export default Router