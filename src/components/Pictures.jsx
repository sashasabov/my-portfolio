import React from 'react'
import styled from 'styled-components'

let PictureBox = styled.div`
     width: 300px;
     transform: rotate(-20deg);

`

const Pictures = () => {
  return (

    <PictureBox className='col-md-6 float-md-start mb-3 ms-md-5'>

        <img src="https://i.imgur.com/Yqmjbhq.jpg" className="img-thumbnail rounded-5  " alt="selfie"></img>

    </PictureBox>

  )
}

export default Pictures