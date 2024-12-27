import React from 'react'
import "../components/css/Footer.css";
import githublogo from './icons/icons8-github.svg';
import linkedinlogo from './icons/icons8-linkedin-2.svg';
import maillogo from './icons/icons8-mail.svg';
const  Footer=  React.forwardRef((props, ref) => {
  return (
    <div ref={ref} >
    <div className='footerparent1'>
    <div>© 2023 Parimal</div>
    <div>Build by Parimal</div>
    <div>Lets be friends</div>
    </div>
    <div className='footerlogos'>
      <div className='logos'>
      <a target="_blank" href='https://github.com/Parimal-3008/'  rel="noreferrer" ><img className='logos1'  src={githublogo} alt='' /></a>
      {/* <a target="_blank" href='https://www.instagram.com/parimal_11111/'><img className='logos1' src={instalogo}  /></a> */}
      <a target="_blank" href='https://www.linkedin.com/in/parimalyeole/'  rel="noreferrer" ><img className='logos1' src={linkedinlogo} alt='' /></a>
      <a target="_blank" href="mailto:parimalyeole30@gmail.com"  rel="noreferrer" ><img className='logos1' src={maillogo}  alt=''/></a>
      

      </div>
    </div>


    </div>
  )
});

export default Footer