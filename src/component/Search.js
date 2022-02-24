import React from 'react'
import {Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
const Search = ({setsearchRating,setsearchTitle } ) => {
  console.log(setsearchTitle)
  return (
    <div className='search'>
        <Form.Label>Serach movie</Form.Label>
  <Form.Control
    type="search"
    onChange={(e)=>setsearchTitle(e.target.value)}
  />
 
  <Rating className='rating' name="simple-controlled"   
  onChange={(event,newValue)=>{setsearchRating(newValue)}}
  />
  
    </div>
  )
}

export default Search