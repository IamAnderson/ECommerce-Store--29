import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/pexels3.jpg'
import { Mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
                 url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #Fff;

  ${Mobile({width: '80%'})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

    ${Mobile({fontSize: '23px'})}
`

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Mobile({flexDirection: 'column'})}
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Agreement = styled.div`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 50px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    font-size: 0.95rem;
    text-transform: uppercase;

    ${Mobile({padding: '30px 10px'})}

    &:hover{
      border-top-right-radius: 20%;
      color: teal;
      border: teal solid 1px;
      background-color: #FFF;
      transition: all 0.3s ease;
    }

    &:active{
      transform: scale(90%);
      transition: 0.3s all ease;
    }
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder= 'name' />
            <Input placeholder= 'last name' />
            <Input placeholder= 'username' />
            <Input placeholder= 'email' />
            <Input placeholder= 'password' />
            <Input placeholder= 'confirm password' />

            <Agreement>
              By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>

            <Button>Create</Button>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Register