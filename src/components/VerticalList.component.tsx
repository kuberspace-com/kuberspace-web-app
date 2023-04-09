import React from 'react';
import List from '@mui/material/List';
import { Product } from '../interfaces/Product.interface';
import ProductListItem from './ProductListItem.component';

export default function VerticalList(props: {products: Array<Product>}) {
  return (
    <List dense sx={{ width: '100%', bgcolor: 'black' }}>
      {props.products.map((product)=> (
        <ProductListItem key={product.id} product={product} />
      ))}
    </List>
  );
}
