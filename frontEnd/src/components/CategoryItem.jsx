import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile } from '../Responsive'


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${Mobile({height: '35vh', width: '100vw'})}
`


const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column ;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: grey;
  cursor: pointer;
  font-weight: 600;
`


const CategoryItem = ({item}) => {
  return (
    <>
      <Container>
        <NavLink to="/products" reloadDocument>
          <Image src={item.img}/>
          <Info>
            <Title> {item.title} </Title>
            <Button>SHOP NOW</Button>
          </Info>
        </NavLink>
      </Container>
    </>
  )
}

export default CategoryItem