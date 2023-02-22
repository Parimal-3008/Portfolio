import React from 'react'
import "../components/css/Card.css";
import logo from './icons/icons8-github.svg';
function Card(props) {
  return (
    <div className='cardparent1'>
    <div className='cardTitle'>
        <div className='cardName'>
            {props.projectname}
        </div>
        <div className='cardgithublogo'><a target="_blank" href={props.url}  rel="noreferrer"><img className='githublogo' src={logo} alt=' ' /></a></div>
    </div>
    <div className='cardTechStack'>
    {props.techstack}
      {/* Node.js Express.js React.js PostgreSQL */}
    </div>
    <div className='cardDescription'>
    <div className='carddesc'>
    {/* Playground for newbie stock traders to buy and sell some of the listed stocks at live price. */}
    {props.description}
    </div>
        
    </div>


    </div>
  )
}

export default Card