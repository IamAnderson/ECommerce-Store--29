import React from 'react'
import styled from 'styled-components'
import { categories } from '../data/Data'
import { Mobile } from '../Responsive'
import CategoryItem from './CategoryItem'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${Mobile({flexDirection: 'column'})}
`


const Catergories = () => {
  return (
    <Container>
        {categories.map((item) => {
            return(
                <CategoryItem item={item} key={item.id}/>
            )
        })}
    </Container>
  )
}

export default Catergories