import React from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Note(props) {
  function deleteThis(){
    props.delete(props.id)
  }
  return (

    <Card id="card" sx={{ maxWidth: 385, mt: 2 }}>
      <div className="image-div">
        
        <CardMedia className='image'
          component="img"
          alt="green iguana"
          height="140"
          image={props.img}
        />
      </div>
      <CardContent >
        <div className="side-by-side">
          <Typography gutterBottom variant="body2" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
          {props.price}
        </Typography>
        </div>
        
        <Typography variant="body2" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions className='button-div'>
        <Button onClick={deleteThis} variant="outlined"  color="error" size="small">Not interested</Button>
      </CardActions>
    </Card>
  )
}

export default Note