import React,{useRef, useState} from 'react'
import "../components/css/Contact.css";
import ClipLoader from "react-spinners/ClipLoader";

const  Contact=  React.forwardRef((props, ref) => {
  const formRef = useRef(null);
  const [loading,setloading] = useState(false);

  const scriptUrl = "https://script.google.com/macros/s/AKfycbyRc12rwnXH04D5I50xwH9eDJqwwVLk83sq9DqlPYv10vbnDdC9iO4-2yt13qkS8N-v/exec"

  const handleclick = (e) =>{
      e.preventDefault()
      setloading(true);

      fetch(scriptUrl, {method: 'POST', body: new FormData(formRef.current)})
      .then(res => {
        setloading(false);
        // alert("Message sent!!!");
        document.getElementById('sendername').value="";
        document.getElementById('sendermail').value="";
        document.getElementById('sendermessage').value="";        
        console.log("SUCCESSFULLY SUBMITTED")
      })
      .catch(err => console.log(err))
  }
  
  if(loading===true)
  return (
    <div className='loaderparent1' ref={ref}>
  <ClipLoader color="#FFD073" loading size="175px" aria-label="Loading Spinner" data-testid="loader" speedMultiplier="0.5"  />
    </div>
  );
  else
  return (<div className='contactparent1' ref={ref}>
    <div className='contactname2'>
    <hr className='projecthr' />
    Contact me
    <hr className='projecthr' />
    </div>
    <form method='POST' ref={formRef} className='contactform' name='google-sheet' onSubmit={handleclick}>
    <input type='text' name='Name' id='sendername' placeholder='Enter your name' required/>
    <input type='email' name='Email' id='sendermail' placeholder='Enter your e-mail address' required/>
    <textarea rows='1' name='Message' id='sendermessage' placeholder='Write your message...' required />    
    <div id='contactbuttondiv'><button className='contactsendmsg' onClick={ handleclick}>Send </button></div>
    </form>
    </div>
  );
})

export default Contact