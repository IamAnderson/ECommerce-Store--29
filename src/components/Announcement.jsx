import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 30px;
    background-color: rgb(0, 128, 128);
    color: #fff;
    justify-content: center;
    display: flex;
     align-items: center;
`

const Announcement = () => {
  return (
    <>
        <Container>
            Super Deal! Free Shipping on Orders over 50$
        </Container>
    </>
  )
}

export default Announcement