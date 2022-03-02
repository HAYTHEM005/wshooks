import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import {Link} from "react-router-dom" 

const Cardfilm=({fil}) => {

  return (
    <Link to={`/trailer/${fil.id}`}>
    
    <Card  sx={{ maxWidth: 345}}>
      <CardMedia 
        component="img"
        height="500"
        image={fil.posterurl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {fil.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {fil.synopsis}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Rating name="read-only" value={fil.rating} readOnly />
      </CardActions>
    </Card>
  </Link>
  );
}
export default  Cardfilm