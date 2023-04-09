import React from 'react';
import { Product } from '../interfaces/Product.interface';
import VerticalList from './VerticalList.component';
import ProductCard from './Card.component';

function ProductList(props: {products: Array<Product>}) {
  const GRID_ITEM_STYLES = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    aspectRatio: '1',
    position: 'relative',
    zIndex: '1',
    borderRadius: 'var(--border-radius)'
  } as React.CSSProperties;

  const MAIN_STYLES = {
    width: '100%'
  };

  return (
    <div className="product-grid" style={MAIN_STYLES}>
      <VerticalList products={props.products} />
    </div>
  );
}
export default ProductList;
