import React from 'react'
import styled from 'styled-components'

// let PictureBox = styled.div`
//      width: 300px;
//      transform: rotate(-15deg);

// `

const Pictures = () => {
  return (
    // className='col-md-6 float-md-start mb-3 ms-md-5'
    // <PictureBox>
<div className='container ms-1' >
        <img src="https://i.imgur.com/Yqmjbhq.jpg" className="img-thumbnail rounded-5  " alt="selfie" style={{width:"300px", rotate:"-10deg"}}></img>
</div>
    // {/* </PictureBox> */}

  )
}

export default Pictures