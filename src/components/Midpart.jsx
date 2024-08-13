import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

function midpart() {

  const colorChangeRef1 = useRef();
  const colorChangeRef2 = useRef();
  const std  = useRef();
  const imm = useRef();
  const [isHovered, setIsHovered] = useState(false);

useEffect(() => {
    gsap.to(colorChangeRef1.current, { x: -20, duration: 1.4});
    gsap.to(colorChangeRef2.current, { x: 0, duration:  2});
    gsap.to(std.current,{y: 0, duration: 1.4});
    gsap.to(imm.current,{y: '-30vw' , duration: 1});

},);

  const handleMouseEnter1 = () => {
    setIsHovered(true);
    colorChangeRef2.current.style.color = 'black'
    colorChangeRef1.current.style.color = 'white'
    colorChangeRef1.current.style.mixBlendMode = 'multiply'
  };

   const handleMouseLeave1 = () => {
      colorChangeRef1
    }; 

  
  const handleMouseEnter2 = () => {
    setIsHovered(true);
 
    colorChangeRef1.current.style.color = 'black'
    colorChangeRef2.current.style.color = 'white'
    colorChangeRef2.current.style.mixBlendMode = 'multiply'
    

    };

  const handleMouseLeave2 = () => {
 
  };



  return (
<div>
    <div className='flex justify-center h-full w-full'>
    <div className='h-[5vw] py-16 absolute font-Media text-[10vw] leading-none '>
      <div className='w-fit overflow-hidden'>
        <div ref={colorChangeRef1}  
        onMouseEnter = {handleMouseEnter1}
                 className={"outliningText Text1 text-black translate-x-full pl-5 px-[10vw] relative hover:z-10 transition-colors duration-500 "} >Software </div>
                 </div>
        <div className='w-fit overflow-hidden'>
        <div ref={colorChangeRef2}  
          onMouseEnter = {handleMouseEnter2}
              className= {`outliningText Text2 hover:z-10  text-white -translate-x-full relative transition-colors duration-500 pointer-events-auto `} >& Web Devloper </div>
              </div>
              <div className='overflow-hidden'>
              <div 
              ref ={std}
              className='text-xl translate-y-20 font-light' > Student at NSUT</div>
              </div>
        <div ref = {imm} className='flex justify-center pointer-events-none'>
        
              <img src = "https://raw.githubusercontent.com/karan2924/my-portfolio/main/src/components/CutOut.png" className='h-[38vw] w-[30vw] isolate -translate-y-[0vw] translate-x-[11vw] '/>
            
       </div>
    </div>
    </div>


    </div>
  )
  
}

export default midpart
