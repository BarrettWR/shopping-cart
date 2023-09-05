import '../styles/App.css'
import Nav from './Nav'
import Hero from './Hero'
import Card from './Cards'
import { createContext, useEffect, useState, useMemo} from 'react'


// Get fake products
function getProducts() {
  return fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(before => before.filter(product => (product.id > 8 && product.id < 15)));
}        

//Create the app
function App({cartItems, setCartItems, number, setNumber, totalcartPrice, setTotalCartPrice}) {
  const [products, setProducts] = useState([]);

  //Call api and put data in products state
  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);


  const addToCart = (id, newNumber, price, name) => {
    newNumber = +newNumber;

    setCartItems(prevCartItems => ({
      ...prevCartItems,
      [id]: {
        name: name,
        quantity: (prevCartItems[id]?.quantity || 0) + newNumber,
        price: price
      }
    }));
  
    setTotalCartPrice(prevTotal => prevTotal + price * newNumber);
    setNumber(prevNumber => prevNumber + newNumber);
  };
  
  return (
    <>
      { console.log(number)}      
      <Nav number={number}/>
      <Hero text={"TECH PRODUCTS"}/>
      <div className='flex flex-row justify-center w-[100vw]'>
        <div className='flex flex-wrap justify-center w-[70vw]'>
          {products.map(
            product => (
              <Card name={product.title} key={product.id} price={product.price} text={product.title} image={product.image} id={product.id} addToCart={addToCart}/>
            )
          )}
        </div>
      </div>
    </>
  )
}



       
export default App
