import '../styles/App.css'
import Nav from './Nav'
import Hero from './Hero'
import Card from './Card'
import { useEffect, useState } from 'react'

function getProducts() {
  return fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(before => before.filter(product => (product.id > 8 && product.id < 15)));
}        

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);
  
  return (
   <>
      <Nav />
      <Hero text={"TECH PRODUCTS"}/>
      <div className='flex flex-row justify-center w-[100vw]'>
        <div className='flex flex-wrap justify-center w-[70vw]'>
          {products.map(
            product => (
              <Card text={product.title} image={product.image}/>
            )
          )}
        </div>
      </div>
   </>
  )
}


        
export default App
