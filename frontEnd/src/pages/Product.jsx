import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { addProduct } from '../redux/cartRedux'
import { publicRequest } from '../requestMethods'
import { Mobile } from '../Responsive'
import { useState } from 'react'


const Container = styled.div`

`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;

    ${Mobile({flexDirection: 'column'})}
`

const ImageContainer = styled.div`
    flex: 1;

    div{
        max-height: 80%;
        width: 100%;
        overflow: hidden;
    }
`

const Image = styled.img`
    width: 100%;
    height: 100%;
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
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity > 1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, color, size }))
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("/products/find/"+id)
                setProduct(res.data)
            } catch (error) {
                
            }
        }

        getProducts();
    }, [id]);

  return (
    <Container>
        <Announcement />
        <Navbar />

        <Wrapper>
            <ImageContainer>
                <div>
                    <Image src={product.img} />
                </div>
            </ImageContainer>

            <InfoContainer>
                <Title>{product.title}</Title>
                <Desc>{product.desc}</Desc>
                <Price>${product.price}</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                        ))}
                    </Filter>

                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            {product.size?.map((s) =>(
                                <FilterSizeOption key={s} onClick={(e) => setSize(e.target.value)}>{s}</FilterSizeOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity("dec")}/>
                        <Amount> {quantity} </Amount>
                        <Add onClick={()=>handleQuantity()}/>
                    </AmountContainer>

                    <Button onClick={handleClick}>Add to Cart</Button>
                </AddContainer>
            </InfoContainer> 
        </Wrapper>

        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product