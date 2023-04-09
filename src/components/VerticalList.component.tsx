import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Product } from '../interfaces/Product.interface';
import ProductListItem from './ProductListItem.component';

export default function VerticalList(props: {products: Array<Product>}) {
  var [checked, setChecked] = React.useState([1]);

  var handleToggle = (value: number)=> ()=> {
    var currentIndex = checked.indexOf(value);
    var newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', bgcolor: 'black' }}>
      {props.products.map((product)=> (
        <ProductListItem key={product.id} product={product} />
      ))}
    </List>
  );
}
