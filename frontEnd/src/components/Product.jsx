import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 280px;
    height: 350px;
    box-shadow:  1px 1px 5px #000;
    position: relative;
`

const Circle = styled.div`
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`

const Icon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #000;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.4s ease;
    opacity: 0;


    &:hover{
        background-color: #e9f5f5;
        transform: scale(110%);
    }
`

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000ab;
    transition: all 0.25s ease-in;


    &:hover{
        background-color: transparent;
    }

    &:hover ${Icon}{
        opacity: 1;
        transition: 1.50s all ease 0.25s;
    }
`




const Product = ({item}) => {
  return (
    <>
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Link to={`/cart`}><ShoppingCartOutlined /></Link>
                </Icon>

                <Icon>
                    <Link to={`/product/${item._id}`} reloadDocument>
                        <SearchOutlined />
                    </Link>
                </Icon>

                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    </>
  )
}

export default Product