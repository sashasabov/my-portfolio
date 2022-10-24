import React, {useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import '../App.css';

const Resume = () => {

    // const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess() {
    // setNumPages(numPages);
    // setPageNumber(1);
  } 

  //{ numPages }

// function changePage(offSet){
//     setPageNumber(prevPageNumber =>prevPageNumber +offSet)}

// function changePageBack(){
// changePage(-1)
// }

// function changePageNext(){
// changePage(+1)
// }
  return (
    <div className="App" style={{height:"100vh"}}>
    <div className='d-flex flex-column align-items-center mt-3'>
        {/* <p>
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && 
      <button onClick={changePageBack} type="button" class="btn btn-dark">Previous Page</button>
      }
      {
      pageNumber < numPages &&
      <button onClick={changePageNext} type="button" class="btn btn-dark">Next Page</button>
      } */}
      <Document file="/Resume A. Sabov.pdf" onLoadSuccess={onDocumentLoadSuccess} >
       <Page pageNumber={pageNumber} className="border border-dark border-4 rounded bg-white"/>
        
      </Document>
      
    </div>
    </div>
  )
}

export default Resume