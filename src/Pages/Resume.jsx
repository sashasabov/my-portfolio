import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import { pdfjs } from 'react-pdf';

const Resume = () => {

    // pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  } 

function changePage(offSet){
    setPageNumber(prevPageNumber =>prevPageNumber +offSet)}

function changePageBack(){
changePage(-1)
}

function changePageNext(){
changePage(+1)
}
  return (
    <div className='d-flex flex-column align-items-center'>
        <p>
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && 
      <button onClick={changePageBack} type="button" class="btn btn-dark">Previous Page</button>
      }
      {
      pageNumber < numPages &&
      <button onClick={changePageNext} type="button" class="btn btn-dark">Next Page</button>
      }
      <Document file="/Resume S. Sabov.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      
    </div>
  )
}

export default Resume