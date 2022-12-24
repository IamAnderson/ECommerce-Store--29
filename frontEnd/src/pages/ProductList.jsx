import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
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

    const location = useLocation();
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const cate = location.pathname.split("/")[2];

    const handleFilter = (e) => {
        setFilter({
            ...filter,
            ...sort,
            [e.target.name]: e.target.value,
        })
    }

  return (
    <>
    <Container>
        <Announcement />
        <Navbar />
        <Title>{ cate }</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>

                <Select name='color' onChange={handleFilter}>
                    <Options disabled selected>
                        Color
                    </Options>
                    <Options>white</Options>
                    <Options>black</Options>
                    <Options>red</Options>
                    <Options>blue</Options>
                    <Options>yellow</Options>
                    <Options>green</Options>
                </Select>

                <Select name='size' onChange={handleFilter}>
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

                <Select name='sort' onChange={(e) => setSort(e.target.value)}>
                    <Options value="newest">Newest</Options>
                    <Options value="highest">Highest</Options>
                    <Options value="lowest">Lowest</Options>
                </Select>   
            </Filter>  
        </FilterContainer>
        <Products cate={cate} sort={sort} filters={filter} />
        <NewsLetter />
        <Footer />
    </Container>
    </>
  )
}

export default ProductList