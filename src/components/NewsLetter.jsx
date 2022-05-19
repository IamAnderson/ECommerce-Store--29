import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'


const Container = styled.div`
    height: 60vh;
    background-color: #0080804e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${Mobile({height: '50vh'})}
`

const Title = styled.div`
    font-size: 5rem;
    margin: 20px;
    ${Mobile({fontSize: '4rem'})}
`

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-transform: uppercase;
    ${Mobile({fontSize: '20px', textAlign: 'center', maxWidth: '40vh'})}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid lightgrey;
`

const Input = styled.input`
    border: none;
    flex: 9;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background: teal;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: teal;
        background-color: #fff;
        border-left: 1px solid lightgrey;
        transform: rotate(180deg);
        transition: 0.35s ease all;
    }

    &:active{
        border-left: 1px solid lightgrey;
        transform: translateX(-70%) rotate(180deg);
    }
`


const NewsLetter = () => {
  return (
    <>
        <Container>
            <Title>Newsletter</Title>
                <Description>
                    Get timely updates from your favourite products.
                </Description>
                <InputContainer>
                    <Input placeholder='Your Email'/>
                    <Button>
                        <SendOutlined />
                    </Button>
                </InputContainer>
        </Container>
    </>
  )
}

export default NewsLetter