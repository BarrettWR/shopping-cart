import '../styles/App.css'

function Card({text, image}) {

  return (
   <div className=' hover:cursor-pointer flex flex-wrap items-end justify-end w-[300px] h-[300px] m-6 rounded-xl bg-white bg-contain bg-no-repeat bg-center shadow-lg ")]' 
        style={{ backgroundImage: `url(${image})` }}>
      
      <div className='p-2 bg-slate-100 bg-opacity-40 backdrop-blur-sm h-[50px] w-[300px] truncate text-ellipsis rounded-xl'>
        <h1 className='font-body text-lg w-[300px] truncate'>{text}</h1>
      </div>
   </div>
  )
}

export default Card
