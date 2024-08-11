import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
function Sliders() {
  const slide1 = useRef()
  const slide2 = useRef()

  useEffect(() => {
gsap.to(slide1.current,{ x: '-100%' , duration: 2});
gsap.to(slide2.current,{ x: '100%' , duration: 2});
})

  return (
    <div className='overflow-hidden flex'
    style={{ perspective: '1000px' }}>
    <div ref={slide1} className='w-[50%] h-screen bg-zinc-800'>Sliders</div>
    <div ref={slide2} className="h-screen w-[50%] bg-zinc-400" ></div>
    </div>
  )
}

export default Sliders