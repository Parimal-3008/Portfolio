import React,{useEffect, useState} from "react";
import "../components/css/Intro.css";

const  Intro=  React.forwardRef((props, ref) => {
  let str1 = "Hi, my name is";
  let str2 = "Parimal Yeole.";
  let str3="I build things for web."
  let str4=" I am a fresh graduate aspiring to build innovational and exceptional products. I am currently working on learning new technologies and improving my problem solving skills.                              "
  let str=str1;
  const [line1,setText1]= useState("");
  const [line2,setText2]= useState("");
  const [line3,setText3]= useState("");
  const [line4,setText4]= useState("");
  const [index,setIndex]= useState(0);
  const[timer,settimer] = useState(50);
  useEffect(() => {
    const interval = setInterval(() => {
     if(index<str1.length)
     { 
      // console.log(index)
      setText1( line1 + str1[index]);
      setIndex(index + 1);
     }
      else if (index-str1.length<str2.length) {
        // console.log(index);
        setText2(line2 + str2[index-str1.length]);
        setIndex(index + 1);
      }
      else if(index-str1.length-str2.length<str3.length)
      {
        setText3( line3 + str3[index-str1.length-str2.length]);
        setIndex( index + 1);
      }
      else if(index-str1.length-str2.length-str3.length<str4.length )
      {
          settimer(30);
          if(window.innerWidth>1050)
          setText4( line4 + str4[index-str1.length-str2.length-str3.length]);
          setIndex( index + 1);
        
      }
      else
      {
        
        
          setText2("  ");
          setText3("  ");
          setText4("  ");
        setIndex(1);
        settimer(50);
        setText1("H"); 
        
      }
    }, timer);
    return () => clearInterval(interval);
  }, [index]);
  
  
  
  
  return (
    <div className="parenty" ref={ref}>
      <p id="Line1">{line1}</p>
      <p id="Line2">{line2}</p>
      <p id="Line3">{line3}</p>
      <p id="Line4">{line4}</p>
    </div>
  );
});

export default Intro;
