import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data/Data'
import Product from './Product'



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
`


const Products = () => {
  return (
    <>
        <Container>
            {popularProducts.map((item) => {
                return(
                    <Product item={item} key={item.id}/>
                )
            })}  
        </Container>
    </>
  )
}

export default Products