import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/apiCalls'
import { Mobile } from '../Responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),
                 url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
                 background-size: cover;

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
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 25%;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Retrieve = styled(Link)`
    font-size: 12px;
    margin: 20px 0px;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 30px 10px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    font-size: 0.95rem;
    text-transform: uppercase;

    ${Mobile({padding: '20px 5px'})}

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
    
    &:disabled{
      cursor: not-allowed;
    }
`

const NewAcct = styled(Link)`
    font-size: 12px;
    margin: 10px 0;
    text-transform: uppercase;
    font-weight: 400;
    border: teal 1px solid;
    color: teal;
    width: inherit;
    text-decoration: none;
    text-align: none;
    padding: 10px 10px;
    text-align: center;
    transition: 0.4s ease all;
    cursor: pointer;

    &:hover{

    }
`

const Error = styled.span`
  color: red;
`


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch,{ username, password })
  }

  return (
    <Container>
        <Wrapper>
          <Title>Login</Title>
          <Form>
            <Input placeholder= 'username or email' onChange={(e) => setUsername(e.target.value)}/>
            <Input placeholder= 'password' type="password" onChange={(e) => setPassword(e.target.value)}/>

            <Retrieve to='/'>
              Forgot Password ?
            </Retrieve>

            <Button onClick={handleLogin} disabled={isFetching}>Sign In</Button>
            {error && <Error> Something went wrong.. </Error>}
            <NewAcct to='/SignUp'>
              Create New Account
            </NewAcct>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Login