import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p , & > div{
        margin-right: 40px;
        font-size:16px;
        align-items: center;
    }
`

const Container = styled(Box)`
    display: flex;
`

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));

const CustomButtons = () => {
  return (
    <Wrapper>
        <LoginButton variant='contained'>Login</LoginButton>
        <Typography style={{marginTop: '3px', width: '135px'}}>Become a Seller</Typography>
        <Typography style={{marginTop: '3px'}}>More</Typography>
        <Container>
        <ShoppingCartIcon/>
        <Typography>Cart</Typography>
        </Container >
        
    </Wrapper>
  )
}

export default CustomButtons
