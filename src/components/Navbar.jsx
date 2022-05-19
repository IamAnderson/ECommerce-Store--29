import { Badge, Input } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Mobile } from '../Responsive'


const Nb = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Nb_Cont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 60px;
    width: 100%;
    ${Mobile({height: '50px', padding: '1rem 0'})}
`

const Nb_Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${Mobile({display: 'none'})}
`

const Nb_Search = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgrey;
    margin-left: 2rem;
    padding: 0.25rem;
`

const Nb_Logo = styled.div`
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

const Nb_Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${Mobile({justifyContent: 'center', flex: '3'})}
`

const Nb_Menu = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-right: 1rem;
`

const Nb_SignUp = styled(NavLink)`
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
` 

const Nb_SignIn = styled(NavLink)`
    text-decoration: none;
    margin-left: 2rem;
    color: #000;
    text-transform: uppercase;
` 


const Navbar = () => {
  return (
    <>
        <Nb>
            <Nb_Cont>
                <Nb_Left>
                    <Lang>
                        EN    
                    </Lang>                 

                    <Nb_Search>
                        <Input placeholder='search'/>
                        <Search style={{color: 'grey', fontSize: '1rem', cursor:'pointer'}}/>
                    </Nb_Search>
                </Nb_Left>


                <Nb_Logo>
                    <Logo font={true }>
                        <Link to='/' style={{textDecoration: 'none', color: '#000'}}>29.</Link>
                    </Logo>
                </Nb_Logo>


                <Nb_Right>
                    <Nb_Menu>
                        <Nb_SignUp to='/SignUp'>
                            Sign Up
                        </Nb_SignUp>

                        <Nb_SignIn to='/SignIn'>
                            Sign In
                        </Nb_SignIn>
                    </Nb_Menu>
                    <Badge badgeContent={3} color='primary'>
                        <Link to='/Cart'><ShoppingCartOutlined style={{cursor: 'pointer'}}/></Link>
                    </Badge>
                </Nb_Right>
            </Nb_Cont>
        </Nb>
    </>
  )
}

export default Navbar