import React from 'react'
import pdf from "./Parimal_resume.pdf"
import "../components/css/PDFViewer.css"
function PDFViewer() {
  return (
    
    <div className='pdfparent'>
   
      <iframe src={pdf} style={{ height: '100%', width: '100%' }}></iframe>
    </div>
  )
}

export default PDFViewer;
