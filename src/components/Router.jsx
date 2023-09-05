import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from "./Cart.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const Router = () => { 
    const [number, setNumber] = useState(0);
    const [totalcartPrice, setTotalCartPrice] = useState(0);
    const [cartItems, setCartItems] = useState({});

    const resetCart = () => {
        setCartItems({});
        setTotalCartPrice(0);
        setNumber(0);
      }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App cartItems={cartItems} setCartItems={setCartItems} totalcartPrice={totalcartPrice} setTotalCartPrice={setTotalCartPrice} number={number} setNumber={setNumber}/>,
        },
        {
            path: "/cart",
            element: <Cart resetCart={resetCart} cartItems={cartItems} setCartItems={setCartItems} totalcartPrice={totalcartPrice} setTotalCartPrice={setTotalCartPrice} number={number} setNumber={setNumber}/>,
        },
    ]);
    
    return <RouterProvider router={router} />;
}

export default Router