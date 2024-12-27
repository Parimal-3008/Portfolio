import React from 'react'
import { useState } from 'react';
import "../components/css/Navbar.css";
import Menubar from './Menubar';
const  Navbar=  React.forwardRef((props, ref) => {
  
  const [navactive,setnav]= useState(0);
  const list=document.getElementById("mobileparent");
  const list2=document.getElementById("nav-btn");
  const handleClick=()=>{
    const list3=document.getElementById("mobileparent");
    const list4=document.getElementById("nav-btn");
    console.log(navactive);
    if(navactive === 1)
    {
      setnav(0);
      list3.style.display="none";
      list4.style.marginRight="10px";
      list4.style.transition="all 0.2s ease-in";
      
    }
    else
    {
      setnav(1);
      list3.style.display="flex";
      list4.style.transition="all 0.2s ease-in";
    }
  }
  return (
    
        <div className='parent1'>
            <div className='left'>Parimal</div>
            <div className='right'>
            <button className='navbuttons' onClick={()=>{props.ref3.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>About</button>
            <button className='navbuttons' onClick={()=>{props.ref4.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>Experience</button>            
            <button className='navbuttons' onClick={()=>{props.ref5.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>Skills</button>
            <button className='navbuttons' onClick={()=>{props.ref6.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>Projects</button>
            <button className='navbuttons' onClick={()=>{props.ref7.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>Education</button>
            <button className='navbuttons' onClick={()=>{props.ref8.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>Contact</button>
           
            <button className='navbuttons2'><Menubar /></button>
           </div>
           
            <br />
            <div className='mobileparent' id = 'mobileparent'>
            <ul className='mobile-list'>
            <li className='listitems'><button className='listbuttons' onClick={()=>{props.ref3.current.scrollIntoView({ behavior: 'smooth', block: 'start' });list.style.display="none";setnav(0);list2.style.transition="all 0.2s ease-in";}}>About</button></li>
            <li className='listitems'><button className='listbuttons' onClick={()=>{props.ref4.current.scrollIntoView({ behavior: 'smooth', block: 'start' });list.style.display="none";setnav(0);list2.style.transition="all 0.2s ease-in";}}>Experience</button></li>            
            <li className='listitems'><button className='listbuttons' onClick={()=>{props.ref5.current.scrollIntoView({ behavior: 'smooth', block: 'start' });list.style.display="none";setnav(0);list2.style.transition="all 0.2s ease-in";}}>Skills</button></li>
            <li className='listitems'><button className='listbuttons' onClick={()=>{props.ref6.current.scrollIntoView({ behavior: 'smooth', block: 'start' });list.style.display="none";setnav(0);list2.style.transition="all 0.2s ease-in";}}>Projects</button></li>
            <li className='listitems'><button className='listbuttons' onClick={()=>{props.ref7.current.scrollIntoView({ behavior: 'smooth', block: 'start' });list.style.display="none";setnav(0);list2.style.transition="all 0.2s ease-in";}}>Education</button></li>
            <li className='listitems'><button className='listbuttons' onClick={()=>{props.ref8.current.scrollIntoView({ behavior: 'smooth', block: 'start' });list.style.display="none";setnav(0);list2.style.transition="all 0.2s ease-in";}}>Contact</button></li>
            <li className='listitems'> <button className='navbuttons2' ><Menubar /></button></li>
            </ul>
            </div>
            <button type="button" className="nav-btn" id='nav-btn' onClick={()=> handleClick()}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="nav-icon" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg">
            <line x1="31" y1="10" x2="7" y2="10"></line>
            <line x1="31" y1="6" x2="3" y2="6"></line>
            <line x1="31" y1="14" x2="3" y2="14"></line>
            <line x1="31" y1="18" x2="7" y2="18"></line>
            </svg>
            </button>
        </div>
      
    
  )
});

export default Navbar