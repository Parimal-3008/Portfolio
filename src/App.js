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
import { Analytics } from '@vercel/analytics/react';

import { Routes, Route } from 'react-router-dom';
import PDFViewer from './components/PDFViewer';
import Base from './Base';
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
    <>
    <Routes>
    <Route path="/"  element= {<Base />}/>
    <Route path="/resume"  element={<PDFViewer />} />
    </Routes>
    <Analytics />
    </>
  );
}

export default App;
