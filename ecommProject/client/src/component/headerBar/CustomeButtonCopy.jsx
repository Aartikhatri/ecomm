import React, { useState, useContext } from 'react';
import { Button, styled, Box, Typography ,Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom' ;
import { useSelector } from 'react-redux';


// components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile'

// import usecontext data 
import { DataContextVariable } from '../context/DataContext.jsx';

const ButtonWrap = styled(Box)(({theme})=> ({
  color : 'black' ,
  marginLeft : '1.2rem',
  marginTop : '0.16rem',
  [theme.breakpoints.down('md')] : {
    marginLeft : '0',
  }
}) )

const MainContainer = styled(Box)(({theme})=> ({
  display: 'flex' ,
   [theme.breakpoints.down('md')] : {
    display : 'block' , 
    padding  : '0.5rem' ,
   }
}) )

const TestWrap = styled(Typography)(({theme})=>({
  color :  '#717a84',
  marginLeft : '2.5rem' ,
  padding : '0.5rem' , 
  [theme.breakpoints.down('md')] : {
    marginLeft : '0',
   }
}) )

const CartWrap = styled(Link)(({theme})=>({
  color :  '#717a84',
  marginLeft : '2.5rem' ,
  padding : '0.5rem' , 
  textDecoration : 'none' ,
  [theme.breakpoints.down('md')] : {
    marginLeft : '0',
   }
}) )




const CustomeButton = () => {

  // staes
  const [openLoginDialog, setLoginDialog] = useState(false)

  // useContext 
  const {showUserName , setUserName  }  = useContext(DataContextVariable)

  
  // usimg use selctor for feching data from redux
  const { cart} = useSelector( state => state.cartItem)

  // function for open login dialog 
  const openDialog = () => {
    setLoginDialog(true)
  }

  return (
    <MainContainer style={{}}>
      <ButtonWrap>

        {

           showUserName ?  <Profile accountHolder={showUserName} setUserName={setUserName}   />
           : <Button variant="text" style={{ color: '#717a84' }} onClick={() => openDialog()} >Login</Button>
        }
       
      </ButtonWrap>

      <TestWrap >Become a  Seller</TestWrap>
      <TestWrap >More</TestWrap>

      <CartWrap style={{ display: 'flex' }} to={'/cart'} >

        <Badge badgeContent={cart?.length} color='warning' >
        <ShoppingCartIcon style={{ color: '#717a84' }} />
        </Badge>

        <Typography style={{ marginLeft : '0.7rem'}}  >Cart</Typography>
      </CartWrap>

      {/* login dialog */}
      <LoginDialog open={openLoginDialog} setClose={setLoginDialog} />

    </MainContainer>
  )
}

export default CustomeButton
