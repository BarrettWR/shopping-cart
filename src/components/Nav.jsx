import { useState } from "react"
import '../styles/App.css'

function Nav() {

  return (
   <div className=" flex flex-row justify-end bg-slate-600 p-3 shadow-md">
        <ul className="flex flex-row align-middle">
            <li className=" px-10 text-2xl font-semibold text-slate-100">Shop</li>
            <li className=" px-10 text-2xl font-semibold text-slate-100">Cart</li>
        </ul>
   </div>
  )
}

export default Nav
