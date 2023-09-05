import { useState } from "react"
import '../styles/App.css'
import { Link } from "react-router-dom"
import React, { useContext } from 'react';


function Nav({number}) { 

  return (
   <div className=" flex flex-row justify-end p-3 z-30">
        <div className="flex flex-row align-middle m-4">
            <Link to="/">    <span className=" active:bg-opacity-40 hover:bg-opacity-20 backdrop-blur-md pr-10 pl-10 pb-1 ml-5 text-2xl font-semibold text-slate-100 bg-slate-100 bg-opacity-10 border-2 rounded-2xl">Shop</span></Link>
            <Link to="/cart"><span className=" active:bg-opacity-40 hover:bg-opacity-20 backdrop-blur-md pr-10 pl-10 pb-1 ml-5 text-2xl font-semibold text-slate-100 bg-slate-100 bg-opacity-10 border-2 rounded-2xl">Cart
              <span className="rounded-xl bg-green-600 p-1 m-1 ml-3 text-sm align-middle">{number}</span></span></Link>
        </div>
   </div>
  )
}

export default Nav