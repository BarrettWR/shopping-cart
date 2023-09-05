import '../styles/App.css'
import Nav from './Nav'
import React, { useContext } from 'react';

function Cart({cartItems, setCartItems, number, totalcartPrice, resetCart}) {

  return (
   <>
      <Nav number ={number}/>
      <div className='flex flex-wrap justify-center w-[100vw]'>
        <div className='flex flex-col items-center mt-10 mb-10 w-[60vw] h-[80vh] bg-slate-200 rounded-lg'>
          <h1 className='p-10 text-6xl'>Cart</h1>
          <div className='flex flex-column flex-wrap w-[70%] text-xl'>
              {Object.entries(cartItems).map(([id, item]) => (
                <div className='flex flex-row justify-between mt-5 w-[100%]'>
                  <div key={id}>
                    <div className='max-w-[70%]'>{item.quantity}x {item.name}</div>
                  </div>
                  <div>
                    <div>${item.price}</div>
                  </div>
                </div>
              ))}
              <div className='mt-12 flex justify-between align-middle items-center w-[100%]'>
                  <button onClick={() => resetCart()} className='rounded-xl bg-slate-700 p-3 text-white'>Check Out</button>
                  Total: ${totalcartPrice}
              </div>
          </div>
        </div>
      </div>
   </>
  )
}


export default Cart
