import { Badge, Input } from '@material-ui/core'
import { Search, ShoppingCartOutlined, ExitToApp } from '@material-ui/icons'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile } from '../Responsive'
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../redux/apiCalls'
import { useState } from 'react'


const Nb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NbCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 60px;
    width: 100%;
    ${Mobile({height: '50px', padding: '1rem 0'})}
`

const NbLeft = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${Mobile({display: 'none'})}
`

const NbSearch = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgrey;
    margin-left: 2rem;
    padding: 0.25rem;
`

const NbLogo = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    font-family: ${({font}) => (font ? 'Digital' : 'Loopy')};
    font-size: 3.5rem;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    ${Mobile({fontSize: '3rem'})}
`

const NbRight = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({justifyContent: 'center', flex: '3'})}
`

const NbMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 1rem;
`

const NbSignUp = styled(NavLink)`
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
` 

const NbSignIn = styled(NavLink)`
    text-decoration: none;
    margin-left: 2rem;
    color: #000;
    text-transform: uppercase;
` 

const UserIcon = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
    
    .user{
        font-size: 18px;
        text-transform: capitalize;
    }
    
    .img{
        border: 1px solid teal;
        color: teal;
        border-radius: 50%;
        padding: 0.45rem;
        margin: 0 1rem 0 0.35rem;

        font-family: "Digital";
        font-size: 1.75rem;
        font-weight: 600;
        text-transform: capitalize;
    }
`

const LogTab = styled.div`
    position: absolute;
    top: 12%;
    right: 2%;

    border: 1px solid #000;
    padding: 0.5rem 1rem;
    background-color: #fff;

    z-index: 10;

    @media screen and (max-width: 500px){
        top: 10%;
        right: 18%;
    }

    span{
        display: flex;
        align-items: center;

        font-size: 18px;
        font-family: "Digital";
        color: #000;
        cursor: pointer;

        
        .icon{
            margin-left: 0.5rem;

            &:active{
                transform: scale(90%);
            }
        }

        &:active{
            transform: scale(90%);
        }
    }   
`


const Navbar = () => {
    const cart = useSelector(state => state.cart.quantity);
    const { currentUser } = useSelector(state => state.user);

    const dispatch = useDispatch();
    const [ showLog, setShowLog ] = useState(false);

    const handleLogout = () => {
        logout(dispatch)
    }

    const userTag = currentUser?.username;

  return (
    <>
        <Nb>
            <NbCont>
                <NbLeft>
                    <Lang>
                        EN    
                    </Lang>                 

                    <NbSearch>
                        <Input placeholder='search'/>
                        <Search style={{color: 'grey', fontSize: '1rem', cursor:'pointer'}}/>
                    </NbSearch>
                </NbLeft>


                <NbLogo>
                    <Logo font={true }>
                        <Link to='/' style={{textDecoration: 'none', color: '#000'}} reloadDocument>29.</Link>
                    </Logo>
                </NbLogo>


                <NbRight>
                    { currentUser ? 
                        <>
                            <UserIcon onClick={() => setShowLog(!showLog)} onMouseEnter={() => setShowLog(true)}>
                                <span className="img"> {userTag.split("")[0]}{userTag.split("")[1]} </span>
                            </UserIcon>

                            <>{ showLog && (
                                <LogTab onMouseEnter={() => setShowLog(true)} onMouseLeave={() => setShowLog(false)}>
                                    <span onClick={handleLogout}> Logout <span className="icon"> <ExitToApp /> </span> </span>
                                </LogTab>
                            )}</>
                        </>
                        :
                        <NbMenu>
                            <NbSignUp to='/SignUp'>
                                Sign Up
                            </NbSignUp>

                            <NbSignIn to='/SignIn'>
                                Sign In
                            </NbSignIn>
                        </NbMenu>
                    }
                    <Link to='/Cart'>
                        <Badge overlap='rectangular' badgeContent={cart} color='primary'>
                            <ShoppingCartOutlined style={{cursor: 'pointer'}}/>
                        </Badge>
                    </Link>
                </NbRight>
            </NbCont>
        </Nb>
    </>
  )
}

export default Navbar