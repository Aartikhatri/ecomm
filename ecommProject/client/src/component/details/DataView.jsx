
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getBookDetails } from '../../redux/actions/bookAction'
import { Box, Grid, styled } from '@mui/material'

import ImageDetail from './ImageDetail'
import StarBorderIcon from '@mui/icons-material/StarBorder';

// importing components
import ShippingOffer from '../homeComponent/ShippingOffer'
import QualityTest from '../homeComponent/QualityTest'


// styling
const MainContainer = styled(Box)(({ theme }) => ({
    margin: '4.4rem  0 0 0',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
}))

const GridBox = styled(Grid)(({ theme }) => ({

    border: '1px solid black',
    gap: '1rem',
    width: '65%',
    backgroundColor: 'white',

    [theme.breakpoints.down('md')]: {
        margin: '0.5rem',
        gap: '0.4rem',
        width: '100%'
    }
}))

const RightGrid = styled(Grid)(({ theme }) => ({
    border: '1px solid black',
    padding: '0.5rem',

}))

const LeftGrid = styled(Grid)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        marginLeft: '0.5rem'
    }
}))

const TitlePara = styled('p')(({ theme }) => ({
    fontFamily: 'Roboto Condensed, sans-serif',
    fontWeight: '750',
    fontSize: '2rem',
    color: 'var(--font-grey)',
    [theme.breakpoints.down('md')]: {
        fontWeight: '650',
        fontSize: '0.9rem',
    }
}))

const AuthorePara = styled('p')(({ theme }) => ({
    fontFamily: 'Roboto Condensed, sans-serif',
    // 
}))

const AvailablePara = styled('p')(({ theme }) => ({
    color: 'var(--font-grey)',
    textAlign: 'right'
}))

const DataView = () => {
    const { bookId } = useParams()

    const { bookInfo } = useSelector(state => state.bookInfo)

    // date for delivary
    const date = new Date( new Date().getTime() + ( 5*24*60*60*1000 ) );

    // console.log(bookInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (bookInfo && bookId !== bookInfo._id)
            dispatch(getBookDetails(bookId));

    }, [dispatch])

    return (
        <>
            <MainContainer >
                <GridBox container  >

                    <LeftGrid item lg={4} md={4} sm={3} xs={12} >
                        <ImageDetail bookData={bookInfo} />
                    </LeftGrid>

                    <RightGrid item lg={7} md={6} sm={8} xs={12} >

                        <TitlePara> {bookInfo?.result?.title} </TitlePara>

                        <hr />
                        <AuthorePara> AUTHOR : <span style={{ color: 'red' }} >{bookInfo?.result?.author} </span></AuthorePara>
                        <AvailablePara >Availability : <span style={{ color: '#26a541' }} >In-Stock</span></AvailablePara >
                        <hr />

                        <div style={{ lineHeight: '1rem' }} >

                            <p><b style={{ color: '#26a541', fontWeight: '750' }} > Special Price  </b></p>

                            <p >
                                <span style={{ fontSize: '1.7rem', fontWeight: '850' }}> ₹{bookInfo?.result?.price}   </span>
                                <span style={{ color: 'var(--font-grey)', fontSize: '0.7rem', textDecoration: 'line-through' }} > 799 </span>  &nbsp;&nbsp;
                                <span style={{ color: '#26a541', fontSize: '0.7rem', fontWeight: '750' }}>Special Offer Off  </span>
                            </p>

                            <p>
                                <span style={{ color: 'var(--font-grey)' }}> 8 Ratings and 1 Reviews  </span>
                                <span style={{ color: '#26a541' }} > &nbsp; &nbsp;
                                    <StarBorderIcon fontSize='sx' />
                                    <StarBorderIcon fontSize='sx' />
                                    <StarBorderIcon fontSize='sx' />
                                    <StarBorderIcon fontSize='sx' />
                                </span>
                            </p>

                            <div>
                                <p style={{ color: '#26a541', fontSize: '1.2rem', fontWeight: '850' }}>more details</p>

                                <p> 1) &nbsp; <b style={{ fontSize: '1rem' }}>{bookInfo?.result?.title} </b>:-&nbsp;
                                    <span style={{ color: 'var(--font-grey)', fontSize: '0.8rem' }} >
                                        {bookInfo?.result?.title} is {bookInfo?.result?.author}'s book , published in year
                                        <b>{bookInfo?.result?.year} </b>
                                        at <b>{bookInfo?.result?.country} </b>
                                    </span>
                                </p>
                            </div>

                            <hr />

                            <div style={{ color: 'var(--font-grey)', padding: '1rem' }}>
                                <span >
                                    ISBN : 9781310391977
                                </span>
                                <span style={{ float: 'right' }}>
                                    LANGUAGE : {bookInfo?.result?.language}
                                </span>
                                <p>
                                    BINDING : PAPERBACK
                                </p>
                            </div>

                            <hr />

                            <div  style={{ color: 'var(--font-grey)', padding: '1rem' , backgroundColor : '#eeeeee' , lineHeight : '0.3rem' }}>
                              <p> Seller : <b>BookChor</b> </p>
                              <p>Dispatch Time : 1-3 working days</p>
                               <p>Delivary by : <b>{date.toDateString()} | ₹40</b> </p>
                             </div>


                        </div>

                    </RightGrid>

                </GridBox >



            </MainContainer>

            <ShippingOffer />
            <QualityTest />
            
        </>
    )
}

export default DataView
