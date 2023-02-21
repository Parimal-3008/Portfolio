import React from 'react'
import "../components/css/Contact.css";
const  Contact=  React.forwardRef((props, ref) => {
  return (
    <div className='contactparent1' ref={ref}>
    <div className='contactname2'>
    <hr className='projecthr' />
    Contact me
    <hr className='projecthr' />
    </div>
    <div className='contactform'>
    <input type='text' id='sendername' placeholder='Enter your name'/>
    <input type='email' id='sendermail' placeholder='Enter your e-mail address'/>
    <textarea rows='1' id='sendermessage' placeholder='Write your message...' />    
    <div id='contactbuttondiv'><button className='contactsendmsg'>Send </button></div>
    

    </div>


    </div>
  )
});

export default Contact