import '../styles/App.css'
import { useContext, useEffect, useState } from 'react';

function Cards({text, image, id, addToCart, price, name}) {
  const [items, setItems] = useState(0);

  function handleIncrement() {
    setItems(items + 1)
  }
  
  function handleDecrement() {
    (items < 1) ? "" : setItems(items - 1)
  }
  
  const handleChange = (event) => {
    setItems(event.target.value)
  }
  

  return (
    <div className='flex flex-col items-center'>
      <div className=' hover:cursor-pointer flex flex-wrap items-end justify-end w-[300px] h-[300px] m-6 rounded-xl bg-white bg-contain bg-no-repeat bg-center shadow-lg ")]' 
        style={{ backgroundImage: `url(${image})` }}>
        
        <div className='p-2 bg-slate-100 bg-opacity-40 backdrop-blur-sm h-[50px] w-[300px] truncate text-ellipsis rounded-xl'>
          <h1 className='font-body text-lg w-[300px] truncate'>{text}</h1>
        </div>
      </div>

      <div>
        <button onClick={handleDecrement} className='hover:bg-slate-200 bg-slate-300 rounded-md w-7 h-7 text-center'>-</button>
        <input type="number" placeholder='0' title='0' name='input' className='m-2 w-20 rounded-md text-center' onChange={handleChange} value={items}/>
        <button onClick={handleIncrement} className='hover:bg-slate-200 bg-slate-300 rounded-md w-7 h-7 text-center'>+</button>
      </div>
      
      <button onClick={() => addToCart(id, items, price, name)} className="bg-slate-700 w-44 rounded-lg p-4 mb-12 font-body text-slate-50">Add to cart</button>
    </div>
  )
}


export default Cards
