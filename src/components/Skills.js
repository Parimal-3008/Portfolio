import React from 'react'
import "../components/css/Skill.css";
import htmllogo from "../components/icons/HTML5.png"
import csslogo from "../components/icons/css3.png"
import jslogo from "../components/icons/javascript.png"
import javalogo from "../components/icons/java.png"
import mongologo from "../components/icons/monogdb.png"
import nodelogo from "../components/icons/nodejs.png"
import postgreslogo from "../components/icons/postgres.png"
import reactlogo from "../components/icons/reactjs.png"
import expresslogo from "../components/icons/expressjs.png"
import flutterlogo from "../components/icons/flutter.png"
import dsa from "../components/icons/problem-solving.png"
import Skillcard from './Skillcard';

const  Skills=  React.forwardRef((props, ref) => {
  return (
    <div className='skilssparent' ref={ref}>
     <div className='name2'>
    <hr className='projecthr'/>
    Skills
    <hr className='projecthr' /> 
    </div>
    <div className='skillslogo'>
        <Skillcard  imagelocation={htmllogo}  imagename='HTML5'   />
        <Skillcard  imagelocation={csslogo}   imagename='CSS3'   />
        <Skillcard imagelocation={jslogo}     imagename='Javascript'   />
        <Skillcard imagelocation={javalogo}   imagename='Java'   />
        <Skillcard imagelocation={nodelogo}   imagename='Node.js'   />
        <Skillcard  imagelocation={expresslogo} imagename='Express.js' />
        <Skillcard  imagelocation={reactlogo}  imagename='React.js'  />
        <Skillcard  imagelocation={mongologo}  imagename='MongoDB'  />
        <Skillcard  imagelocation={postgreslogo} imagename='PostgreSQL'/>        
        <Skillcard  imagelocation={flutterlogo} imagename='Flutter' />
        <Skillcard  imagelocation={dsa} imagename='Data Structure and Algorithms' url={'https://leetcode.com/parimal30/'}/>

    </div>

    </div>
  )
});

export default Skills