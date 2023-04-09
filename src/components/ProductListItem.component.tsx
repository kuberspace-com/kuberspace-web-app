import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  ListItem,
  Typography
} from '@mui/material';
import { onKeyEnter } from '../utilityFunctions/keyEvents';
import { Product } from '../interfaces/Product.interface';
import useBreakpoints from '../hooks/useBreakpoints';

export default function ProductListItem(props: {product: Product}) {
  function navigateToProductPage(_group: any): void {
    throw new Error('Function not implemented.');
  }

  // const {isXs, isSm, isMd, isLg, active} = useBreakpoints();

  return (
    <ListItem
      key={props.product.id}
      disablePadding
      sx={{
        background: 'black',
        borderBottom: '2px solid green',
        // paddingBottom: '0px important',
        '& .MuiCardContent-root, .MuiCardContent-root:last-child': {
          paddingBottom: '0px'
        }
      }}
    >
      <div
        onClick={()=> navigateToProductPage(props.product.group)}
        tabIndex={0}
        role="button"
        style={{
          width: '25%',
          aspectRatio: 'auto 1 / 1',
          resize: 'horizontal',
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
          style={{
            height: '100%',
            width: '100%',
            aspectRatio: 'auto 1 / 1',
            boxSizing: 'border-box',
            padding: '15px'
          }}
          src={props.product.images[0]}
          alt={props.product.name}
        />
      </div>
      <CardContent
        onClick={()=> navigateToProductPage(props.product.group)}
        sx={{
          width: 'auto',
          boxSizing: 'border-box',
          padding: '10px'
        }}
      >
        <div className="information" style={{ height: '80%', width: 'auto' }}>
          <Typography variant="body2" sx={{ fontSize: '14px' }} color="text.secondary">
            {props.product.name}
            :
            {' '}
            {props.product.description}
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: '14px' }} variant="body2" color="text.secondary">
            {`weight in grams: ${props.product.weightInGrams}`}
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: '14px' }} variant="body2" color="text.secondary">
            {`inventory: ${props.product.inventoryOnHand}`}
          </Typography>
          <Typography sx={{ textAlign: 'left', fontSize: '15px', fontWeight: 800 }} variant="body2">
            <span style={{ fontSize: '22px' }}>$</span>
            {' '}
            {props.product.price}
          </Typography>
        </div>
        <CardActions sx={{
          justifyContent: 'flex-end',
          padding: 0,
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
        >
          <Button sx={{ fontSize: '11px' }} size="small">Share</Button>
          <Button sx={{ fontSize: '11px' }} size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    </ListItem>
  );
}
