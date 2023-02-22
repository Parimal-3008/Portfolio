import './App.css';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';
import Education from './components/Education';
import Skills from './components/Skills';
function App() {
  const ref1= useRef();
  const ref2= useRef();
  const ref3= useRef();
  const ref4= useRef();
  const ref5= useRef();
  const ref6= useRef();
  const ref7= useRef();
  const ref8= useRef();
  const ref9= useRef();
  return (
    <div className="App">
    <div className='child1'>
    <Navbar ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} ref6={ref6} ref7={ref7} ref8={ref8} ref9={ref9} />
    </div>
    <div className='child2'>
      <Intro ref={ref2}/>
    </div>
    <div className='child3'>
     <About ref={ref3} />
     </div>
     <div className='child7'>
      <Work ref={ref4}/>
     </div>
     <div className='child7'>
      <Skills ref={ref5} />
     </div>
     <div className='child4'>
      <Projects ref={ref6}/>
     </div>
     <div className='child8'>
      <Education ref={ref7}/>
     </div>
     <div className='child5'>
      <Contact ref={ref8}/>
     </div>
     <div className='child6'>
      <Footer ref={ref9}/>
     </div>
    
     
     

    </div>
  );
}

export default App;
