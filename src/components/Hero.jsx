import '../styles/App.css'
import Nav from './Nav'

function Hero(props) {

  return (
   <div className='
        flex 
        justify-end 
        flex-col
        -mt-24 
        w-[100vw] 
        h-[80vh]  
        -z-20 
        bg-[url("https://media.wired.com/photos/5ebc3972d965c2a1fbff9f51/master/w_2560%2Cc_limit/Business-Gamers-Romania-Singapore-1202642094.jpg")]
        bg-cover
        bg-center
        
        '>
        
      <h1 className='italic flex self-start ml-8 -mb-6 text-[10rem] text-slate-50 font-heading drop-shadow-2xl'>{props.text}</h1>
   </div>
  )
}

export default Hero
