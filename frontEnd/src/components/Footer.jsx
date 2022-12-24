import { GitHub, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Mobile } from '../Responsive'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${Mobile({flexDirection: 'column'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    font-family: ${({font}) => (font ? 'Digital' : 'Loopy')};
    font-size: 3.5rem;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
`

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`

const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border: 1px solid ${props => props.color};
 background-color: ${props => props.color};
 border-radius: 50%;
 color: #fff;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 10px;
 cursor: pointer;
`

const Desc = styled.p`
    margin: 20px 0;
    font-weight: 500;
    line-height: 1.5rem;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right= styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    
`


const Footer = () => {
  return (
    <>
        <Container>
            <Left>
                <Logo font={true}>29.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam atque aliquam numquam vitae ex cupiditate, eaque corrupti ad impedit qui similique beatae deleniti vel reiciendis, consequatur accusamus sed. Quo?</Desc>
                <SocialContainer>
                    <SocialIcon color='#3B5999'>
                        <LinkedIn />
                    </SocialIcon>

                    <SocialIcon color='skyblue'>
                        <Twitter />
                    </SocialIcon>

                    <SocialIcon color='#000'>
                        <GitHub />
                    </SocialIcon>

                    <SocialIcon color='#E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms and Conditions</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/> 356 Lorem Avenue, Ipsum Texas 299817
                </ContactItem>

                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/> + 1 234 5678
                </ContactItem>

                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}}/> contact@29.dev
                </ContactItem>

                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    </>
  )
}

export default Footer