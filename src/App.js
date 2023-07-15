import './App.css';
import { useRef } from 'react';


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
    </>
  );
}

export default App;
