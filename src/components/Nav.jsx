import { useState } from "react"
import '../styles/App.css'
import { Link } from "react-router-dom"

function Nav() {

  return (
   <div className=" flex flex-row justify-end p-3 z-30">
        <ul className="flex flex-row align-middle">
            <Link to="/">    <li className=" active:bg-opacity-40 hover:bg-opacity-20 backdrop-blur-md pr-10 pl-10 pb-1 ml-5 mt-4 text-2xl font-semibold text-slate-100 bg-slate-100 bg-opacity-10 border-2 rounded-2xl">Shop</li></Link>
            <Link to="/cart"><li className=" active:bg-opacity-40 hover:bg-opacity-20 backdrop-blur-md pr-10 pl-10 pb-1 ml-5 mt-4 text-2xl font-semibold text-slate-100 bg-slate-100 bg-opacity-10 border-2 rounded-2xl">Cart</li></Link>
        </ul>
   </div>
  )
}

export default Nav
