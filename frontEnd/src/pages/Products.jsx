import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'

const Container = styled.div`
    padding: 50px;
`

const Products = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Container>
            I will Map products soon.. 
        </Container>
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Products