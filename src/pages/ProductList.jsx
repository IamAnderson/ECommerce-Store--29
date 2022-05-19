import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'


const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`

const Select = styled.select`
    padding: 10px;
    margin-right: 10px ;
`

const Options = styled.option`
 
`


const ProductList = () => {
  return (
    <>
    <Container>
        <Announcement />
        <Navbar />
        <Title>Clothings</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>

                <Select>
                    <Options disabled selected>
                        Color
                    </Options>
                    <Options>White</Options>
                    <Options>Black</Options>
                    <Options>Red</Options>
                    <Options>Blue</Options>
                    <Options>Yellow</Options>
                    <Options>Green</Options>
                </Select>

                <Select>
                    <Options disabled selected>
                        Size
                    </Options>
                    <Options>XS</Options>
                    <Options>S</Options>
                    <Options>M</Options>
                    <Options>L</Options>
                    <Options>XL</Options>
                </Select>

            </Filter>

            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText> 

                <Select>
                    <Options disabled selected>
                        All
                    </Options>
                    <Options>Newest</Options>
                    <Options>Highest</Options>
                    <Options>Lowest</Options>
                </Select>   
            </Filter>  
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
    </>
  )
}

export default ProductList