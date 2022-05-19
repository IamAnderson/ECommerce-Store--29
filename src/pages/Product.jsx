import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { Mobile } from '../Responsive'


const Container = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;

    ${Mobile({flexDirection: 'column'})}
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${Mobile({height: '30vh'})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;


    ${Mobile({Padding: '0px 30px'})}
`

const Title = styled.h1`
    font-weight: 100;
    ${Mobile({fontSize: '27px', minWidth: '10vw' })}
`

const Desc = styled.p`
    margin: 20px 0;

`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;

    ${Mobile({textAlign: 'center', fontSize: '30px'})}
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0;

    ${Mobile({width: '80%'})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    ${Mobile({padding: '0 5px'})}
`

const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`

const FilterSize = styled.select `
    margin-left: 5px;
    padding: 10px;
    border-bottom-left-radius: 50%;
`

const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;

    ${Mobile({width: '60vw'})}
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

    ${Mobile({width: ''})}
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: #fff;
    border-bottom-left-radius: 50%;
    cursor: pointer;

    &:hover{
        background-color: teal;
        color: #fff;
    }

    &:active{
        transform: scale(90%);
    }
`


const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />

        <Wrapper>
            <ImageContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
            </ImageContainer>

            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo unde corporis natus mollitia ratione nam dolor at. Eos, illum nisi, vero ratione explicabo eligendi nostrum quisquam distinctio nesciunt quos consequuntur quo quis sapiente vel! Recusandae exercitationem ipsa facere provident.</Desc>
                <Price>$41.99</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='#000'/>
                        <FilterColor color='darkblue'/>
                        <FilterColor color='grey'/>
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>

                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer> 
        </Wrapper>

        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product