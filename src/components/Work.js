import React, { useState } from "react";
import "../components/css/Work.css";
const  Work=  React.forwardRef((props, ref) => {
  const [Duration, setDuration] = useState("May 2022 - July 2022");
  const [role, setrole] = useState("EID Intern @ GE Healthcare");
  const [description, setdescription] = useState([
    "Explored GE software of Imaging Fabric to learn about existing API and methods for project purpose",
    "Created HTML web page to display patient’s Dicom(Digital Imaging and Communications in Medicine) images and corresponding details for further data analysis and visualization",
    "Processed data from Dicom tags to visualize and load the data on HTML page",
    "Implemented image panning, zooming and rotating feature for the Web-page to enhance the visuals of the images"
  ]);
  const workdesc = {
    "GE Healthcare": {
      Role: "EID Intern @ GE Healthcare",
      Duration: "May 2022 - July 2022",
      description: [
        "Explored GE software of Imaging Fabric to learn about existing API and methods for project purpose",
        "Created HTML web page to display patient’s Dicom(Digital Imaging and Communications in Medicine) images and corresponding details for further data analysis and visualization",
        "Processed data from Dicom tags to visualize and load the data on HTML page",
        "Implemented image panning, zooming and rotating feature for the Web-page to enhance the visuals of the images"
      ],
    },
    
  };

  const handleClick = async (name, current) => {
    for (let i = 1; i <= 1; i++) 
    {
        let name2 = "button" + i;
       // console.log(i);
      //  if(window.innerWidth>1000)
      //  {
      //    document.getElementById(name2).style.borderLeft = "#2C263B";
      //   document.getElementById(name2).style.color = "#D1D7E0";
      //   document.getElementById(name2).style.fontWeight="bold";
      //   document.getElementById("button"+current).style.borderLeft = "3px solid #D1D7E0";
      //   // document.getElementById("button"+current).style.color = "#D1D7E0";
      //   // document.getElementById("button"+current).style.fontWeight="600";
      // }
      //   else
      //   {
      //     document.getElementById(name2).style.borderBottom = "#2C263B";
      //   document.getElementById(name2).style.color = "#D1D7E0";
      //   document.getElementById(name2).style.fontWeight="bold";
      //   document.getElementById("button"+current).style.borderBottom = "3px solid #D1D7E0";
      //   // document.getElementById("button"+current).style.color = "#D1D7E0";
      //   // document.getElementById("button"+current).style.fontWeight="600";

      //   }
    }
    let cnmae= document.getElementById(name).innerText;
    setrole(workdesc[cnmae]['Role']);
    setdescription(workdesc[cnmae]['description']);
    setDuration(workdesc[cnmae]['Duration']);
    
  };
  return (
    <div className="workparent" ref={ref}>
      <div className="workname2">
        <hr className="workhr" id="leftline" />
        Experience
        <hr className="workhr" id="rightline" />
      </div>
      <div className="workouterdiv">
        <a className="workleft" href="https://drive.google.com/file/d/1NLuCkYZO-MT6bLLTEoyUhyb6XuVh7Hy0/view" target='_blank'  rel="noreferrer" >
          <button
            className="workcompanyname"
            id="button1"
            onClick={() => handleClick("button1", 1)}
          >
            GE Healthcare
          </button>
          {/* <button
            className="workcompanyname"
            id="button2"
            onClick={() => handleClick("button2", 2)}
          >
            Scout
          </button>
          <button
            className="workcompanyname"
            id="button3"
            onClick={() => handleClick("button3", 3)}
          >
            Starry
          </button>
          <button
            className="workcompanyname"
            id="button4"
            onClick={() => handleClick("button4", 4)}
          >
            Starry
          </button>
          <button
            className="workcompanyname"
            id="button5"
            onClick={() => handleClick("button5", 5)}
          >
            Starry
          </button> */}
        </a>
        <div className="workright">
          <div className="workrole">{role}</div>
          <div className="workduration">{Duration}</div>
          <div className="workdescription"><ul>{description.map((item)=> <li>{item}</li>)}</ul></div>
        </div>
      </div>
    </div>
  );
});

export default Work;
