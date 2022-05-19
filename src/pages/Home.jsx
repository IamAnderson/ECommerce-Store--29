import React from 'react'
import Announcement from '../components/Announcement'
import Catergories from '../components/Catergories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
        <Announcement />
        <Navbar />
        <Slider />
        <Catergories />
        <Products />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Home