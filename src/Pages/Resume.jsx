import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '../App.css';

const Resume = () => {

  return (
    <div className="App" >
      <div className='d-flex flex-column align-items-center mt-3'>      
        <Document file="static/Resume A. Sabov.pdf">
        <Page pageNumber={1}/>
        </Document>     
      </div>
    </div>
  )
}

export default Resume