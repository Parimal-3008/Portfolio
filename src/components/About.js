import React from 'react'
import '../components/css/About.css'

const  About=  React.forwardRef((props, ref) => {
  return (
    <div className="parent2" ref={ref}>
    <div className='name2'>
    <hr className='projecthr'/>
    About Me
    <hr className='projecthr' />
    </div>
    <div className='MyDesc'>
      <p>Hello! I am Parimal.</p>
      <p>I am an enthusiastic web developer with a passion for creating dynamic and innovative web applications. I graduated from NIT Surat.</p>
      <p>As a fresh graduate, I have strong understanding of web development principles and technologies. My passion for technology and creativity is reflected in my attention to detail and commitment.
      I am excited to further develop my skills and bring innovative solutions to future projects.  </p>
      <p>
        I have developed some web applications with the help of Reacts.js, Node.js, Express.js, MongoDB, and PostgreSQL.
        </p>
        <p>
         Solving more than 1500 Data Structures and Algorithms problems on 
        platforms like leetcode and codeforces helped me in improving my problem-solving skills.
      </p>
    </div>



    </div>
  )
});

export default About