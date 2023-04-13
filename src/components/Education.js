import React from 'react'
import jrclg from "../components/icons/VidyaNiketan.jpeg" ;
import "../components/css/Education.css"
const  Education=  React.forwardRef((props, ref) => {
  return (
    <div className='educationparent' ref={ref}>
        <div className="workname2">
        <hr className="workhr" id="leftline" />
        Education
        <hr className="workhr" id="rightline" />        
      </div>
      <div className='educationparent2'>
      <div className='educationlogo'><img className='svnitlogo' src='https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/Sardar_Vallabhbhai_National_Institute_of_Technology_u_2C_Surat__081923/NIT_Surat_Logo.svg__44168__thumb.png?nocache=3d5545'/></div>
      <div className='educationouter'>
      <div className='institutionname'>National Institute of Technology, Surat</div>
      <div className='degree'>Bachelor of Technology in Electrical Engineering  </div>
      <div className='duration'>August 2019 to May 2023</div>
      </div>      
      </div>
      <div className='educationparent2'>
      <div className='educationlogo'><img className='svnitlogo' src={jrclg} /></div>
      <div className='educationouter'>
      <div className='institutionname'>Vidya Niketan Junior College, Ghatkopar(East), Mumbai</div>
      <div className='degree'>Higher Secondary Education  </div>
      <div className='duration'>May 2019</div>
      </div>
      </div>

      <div className='educationparent2'>
      <div className='educationlogo'><img className='svnitlogo' src='https://pbs.twimg.com/profile_images/938382464338161664/sHXl4HCs.jpg'/></div>
      <div className='educationouter'>
      <div className='institutionname'>Wisdom High International School, Nashik</div>
      <div className='degree'> Secondary Education  </div>
      <div className='duration'>May 2017</div>
      </div>
      </div>
    </div>
  )
});

export default Education