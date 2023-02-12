import React from 'react'
import '../components/Navbar.css'
function Navbar() {
  return (
    <div>

        <div className='parent1'>
            <div className='left'>Parimal</div>
            <div className='right'>
            <button className='navbuttons'>About</button>
            <button className='navbuttons'>Projects</button>
            <button className='navbuttons'>Contact</button>
            <button className='navbuttons'>Resume</button>
             
             </div>
        </div>
    </div>
  )
}

export default Navbar