import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
function Navbar() {
  const a =['Design', 'Photos' , 'LookBook' , 'About']
  const nav = useRef();
  useEffect(() => {
    gsap.to(nav.current,{y : 0, duration: 1.5, opacity :1})
   

  })
  return (
    <div className='overflow-hidden h-full font-Holly' >
    <div ref = {nav}
    className="h-28 w-full flex  justify-between px-[6vw] items-center opacity-0 -translate-y-10">
        <div className ='text-4xl font-Media text-stone-800'>
        KARAN </div>
        <div  className='flex  gap-10 pl-[20px] '>{a.map((items, index) => 
        <a href="" key= {index} className=' hover:translate-y-[-5px] transition-transform duration-500'>{items}</a> )}</div>
        <button className='w-[120px] h-[50px] text-white rounded-lg bg-zinc-800 hover:w-[140px] transition-all duration-300 shadow-xl'>Contact Me</button>
      </div>
      </div>
  )
}

export default Navbar