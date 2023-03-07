import React from 'react'
import "../components/css/Skillcard.css"

function Skillcard(props) {
  const style = {  
    width:'300px',
    // height: 'auto'   
  };
 
  return (
    // <div >
    <a  id='skillcardparent23' target="_blank" href={props.url}  rel="noreferrer">
    <div style={props.url!=null?style:{}} className='Skillcardparent'>
    <img src={props.imagelocation}></img>
       <div className='imagename'>{props.imagename}</div> 

    </div>
    </a>
    // </div>
  )
}

export default Skillcard