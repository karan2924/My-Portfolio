import React from 'react'
import Navbar from './components/Navbar';
import Midpart from './components/Midpart';
import Sliders from './components/Sliders';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (    
    <div className=''> 
    <div className='h-full selection:bg-amber-500 '>
    {/* <Sliders/>  */}

  <Navbar/>
  <Midpart/>

</div>
</div>

  )
}

export default App