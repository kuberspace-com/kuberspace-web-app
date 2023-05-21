import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Product } from '../interfaces/Product.interface';
import { onKeyEnter } from '../utilityFunctions/keyEvents';

export default function ProductCard(props: {product: Product}) {
  const NAVIGATE = useNavigate();
  function navigateToProductPage(productGroup): void {
    NAVIGATE('/product-page', { state: { productGroup }});
  }
  return (
    <Card
      sx={{
        maxWidth: 345, background: 'black', border: '2px solid green', cursor: 'pointer', height: '100%'
      }}
    >
      <div
        onClick={()=> navigateToProductPage(props.product.group)}
        tabIndex={0}
        role="button"
        style={{
          minHeight: '50%',
          maxHeight: 150,
          width: 'auto',
          display: 'flex',
          justifyContent: 'center'
        }}
        onKeyDown={
          (e: React.KeyboardEvent<HTMLDivElement>)=> {
            onKeyEnter(e, ()=> {
              navigateToProductPage(props.product.group);
            });
          }
        }
      >
        <img
          src={props.product.images[0]}
          alt={props.product.name}
        />
      </div>
      <CardContent
        onClick={()=> navigateToProductPage(props.product.group)}
        sx={{ minHeight: '200px' }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.product.description}
        </Typography>
        <Typography sx={{ textAlign: 'right' }} gutterBottom variant="h6" component="div">
          {props.product.price}
        </Typography>
        {/* make loop of details */}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
