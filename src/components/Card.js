import React from 'react'
import "./Card.css";
import logo from './icons8-github-48.svg';
function Card() {
  return (
    <div className='cardparent1'>
    <div className='cardTitle'>
        <div className='cardName'>
            StockX
        </div>
        <div className='cardgithublogo'><img className='githublogo' src={logo}  /></div>
    </div>
    <div className='cardTechStack'>
      Node.js Express.js React.js PostgreSQL
    </div>
    <div className='cardDescription'>
    <div className='carddesc'>Playground for newbie stock traders to buy and sell some of the listed stocks at live price.</div>
        
    </div>


    </div>
  )
}

export default Card