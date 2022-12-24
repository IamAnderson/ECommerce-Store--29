import { Badge, Input } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile } from '../Responsive'
import {useDispatch, useSelector} from "react-redux"
import { logout } from '../redux/apiCalls'


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
    font-size: 18px;
    margin-right: 3rem;
`


const Navbar = () => {
    const cart = useSelector(state => state.cart.quantity);
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
    }

  return (
    <>
        <Nb>
            <NbCont>
                <NbLeft>
                    <Lang onClick={handleLogout}>
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
                            <UserIcon>
                                { currentUser?.username }
                            </UserIcon>
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