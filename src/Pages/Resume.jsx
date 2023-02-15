import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import 'react-pdf/dist/Page/AnnotationLayer.css';
import '../App.css';

const Resume = () => {

  return (
    <div className="App" >
      <div className='d-flex justify-content-center mt-3'>
        <Document className="PDFDocument" file="static/Resume A. Sabov.pdf" >
        <Page className="PDFPage" pageNumber={1} size="A4"/>
        </Document>     
      </div>
    </div>
  )
}

export default Resume