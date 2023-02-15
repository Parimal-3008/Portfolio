import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
    <div className='child1'>
    <Navbar />
    </div>
    <div className='child2'>
      <Intro />
    </div>
    <div className='child3'>
     <About />
     </div>
     <div className='child4'>
      <Projects />
     </div>
     <div className='child5'>
      <Contact />
     </div>
     

    </div>
  );
}

export default App;
