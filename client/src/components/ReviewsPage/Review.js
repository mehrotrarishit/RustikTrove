import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import './review.css'

const data = [
    { rating: 5, count: 1559 },
    { rating: 4, count: 265 },
    { rating: 3, count: 56 },
    { rating: 2, count: 5 },
    { rating: 1, count: 1 },
   ];

const Review = () => {
    const  [selected, setSelected]=useState(null)
  const toggle =(i) =>{
  if(selected === i){
    return setSelected(null)
  }
  setSelected(i)
}
  const reviewData = [
    {
      stars: <Rating name="rating1" value="4" precision="0.5" readOnly />,
      comment: 'Product quality is good',
    },
    {
      stars:<Rating name="rating1" value="4.5" precision="0.5" readOnly />,
      comment: 'The company services are too good',
    },
    {
      stars: <Rating name="rating1" value="5" precision="0.5" readOnly />,
      comment: 'Best E-Commerce experience so far',
    },
    {
      stars: <Rating name="rating1" value="3.5" precision="0.5" readOnly />,
      comment: 'The company needs to improve on their pricing',
    },
    {
      stars: <Rating name="rating1" value="4.5" precision="0.5" readOnly />,
      comment: 'Fast Delivery',
    },
    {
      stars: <Rating name="rating1" value="5" precision="0.5" readOnly />,
      comment: 'The website is cool and interactive. Also the products have variety ',
    },
    {
      stars: <Rating name="rating1" value="5" precision="0.5" readOnly />,
      comment: 'Good customer service',
    },
    {
      stars: <Rating name="rating1" value="4.5" precision="0.5" readOnly />,
      comment: 'Company is in their growing stage, still doing a great job',
    },
];
  return (
    <div className="reviewall">
       <h2>Customer Reviews</h2>
    
    <div className="review_page">
        <div className="review_header">
            <div className="starbox">
                <h3>4.5</h3>
                <Rating name="overall_rating" value="4.5" precision="0.5" readOnly />
                <h3>1886 Reviews</h3>
            </div>
            <div className="barchart">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Rating</TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                            <TableRow key={row.rating}>
                            <TableCell>
                                <Rating name="read-only" value={row.rating} readOnly />                                    <span>{row.rating} Star</span>
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
        <div className="reviewsbody">
            <div className="reviewwrapper">
                <div className="reviewaccordion">
                    {reviewData.map((item, i) => (
                    <div className="review-item" onClick={() => toggle(i)}>
                        <div className="review-title">
                            <h3> User {i+1} {item.stars}</h3>
                            <span>{selected === i ? '-' : '+'}</span>
                        </div>
                        <div className={ selected === i ?  "review-content show" : "review-content"} >
                            <p>{item.comment}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Review
