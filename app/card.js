import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
<div className='cord-container md:flex justify-around'>

    <Card sx={{ maxWidth: 345, backgroundColor: '#0e120f' }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./images/currencypoject.PNG"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            Currency Convertor
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          <a href="https://sparkling-praline-b954f0.netlify.app/" target= "_blank" >click</a>
        </Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345, backgroundColor: '#0e120f'  }} className="mt-6 md:mt-0">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./images/hotstare project in resume.PNG"
          alt="green iguana"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            Hotstar UI Clone
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://aneeshmaury.github.io/hotstar-clone/" target= "_blank" >click</a>
        </Button>
      </CardActions>
    </Card>
    
</div>

    
  );
}