import React , {useEffect, useState}  from 'react'



// NOTE :-  getbooks function has dispath method in it , if we pass this function directly to the useEffectly , 
//  it will deffinely  throw an error so we need  this hook to pass getbooks function in it 


// importing redux action file for fetching all data 
import { getBooks } from '../../redux/actions/bookAction'

// importing  dispatch hook for avoid error 
import { useDispatch, useSelector } from 'react-redux' 

// components
import NavbarComp from './NavbarComp'
import CarausalBar from './CarausalBar'
import BookSlide from './BookSlide'
import ShippingOffer from './ShippingOffer'
import QualityTest  from './QualityTest'


const Home = () => {

  // redux data 
  const { books} = useSelector(state => state.getBooks)



  // dispatch function for getBooks methode 
  const dispatch = useDispatch();

  useEffect(()=>{
        dispatch(getBooks()); // passing getbooks function inside dipatch to avoid dispatch error 
       
  } , [dispatch]);

  return (
    <>
     <div style={{margin : '4.5rem -1rem 0 -1rem ' }}>
     <NavbarComp />
     <CarausalBar />
     </div>
     
      <BookSlide books={books} title='Deals of the Day' timer={true} />
     <BookSlide books={books} title='Best Selling' timer={false} />
     <BookSlide books={books} title='Top Trending' timer={false} />
  
  <ShippingOffer />
  <QualityTest />

    </>
  )
}

export default Home
