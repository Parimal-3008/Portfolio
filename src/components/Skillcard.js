import React from 'react'
import "../components/css/Skillcard.css"

function Skillcard(props) {
  return (
    <div className='Skillcardparent'>
    <img src={props.imagelocation}></img>
       <div className='imagename'>{props.imagename}</div> 

    </div>
  )
}

export default Skillcard